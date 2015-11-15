#! /usr/bin/env node

var Promise = require('bluebird')
var R = require('ramda')
var commandLineArgs = require('command-line-args')
var fs = require('fs')
var verbix = require('verbix');
var throttle = require('f-throttle')

var options = commandLineArgs([
  { name: 'src', type: String, defaultOption: 'verbs.txt' },
  { name: 'moods', type: R.split(',') },
  { name: 'tenses', type: R.split(',') },
  { name: 'pronouns', type: R.split(',') },
  { name: 'delimeter', type: String, defaultOption: ';' },
  { name: 'language' }
]).parse()

var verbList =
  R.filter(
    R.complement(R.isEmpty),
    fs.readFileSync(options.src, 'utf8')
      .toString()
      .split('\n')
  )

var combine = function (sets) {
  return R.map(R.unnest)(R.reduce(R.xprod, R.head(sets), R.tail(sets)));
};

var paths = combine([
  options.moods,
  options.tenses,
  options.pronouns
])

var generateOutputTable = function (conjugationTables) {
  var extractConjugations = function (table) {
    return R.map(function (path) {
      return R.head(R.path(path, table))
    })(paths)
  };

  var table = R.map(R.evolve({
    conjugation: extractConjugations
  }))(conjugationTables)

  return R.pipe(
    R.map(function (row) {
      return R.concat([row.infinitive], row.conjugation)
    }),
    R.map(R.join(options.delimeter)),
    R.join('\n')
  )(table);
}

var conjugate = throttle(1, verbix.conjugate(options.language)) // limit concurrency

var verbTables = R.pipe(
  R.map(function (verb) {
    return Promise.props({
      infinitive: verb,
      conjugation: conjugate(verb)
    });
  }),
  Promise.all
)

// Header
console.log('# infinitive, ' + R.map(R.join('/'), paths).join(', '))

verbTables(verbList)
  .then(generateOutputTable)
  .then(console.log)
