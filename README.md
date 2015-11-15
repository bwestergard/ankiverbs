# ankiverbs

Generate verb tables in Anki's import format.

Example Usage
-----

Run

```
npm install -g ankiverbs
ankiverbs --src=verbs.txt --pronouns=ich,du,er,wir,ihr,Sie --moods=indicative --tenses=present --language=German --delimeter="," > out.txt
```

with verbs.txt resembling...

```
mitbringen
umsteigen
abholen
abfahren
einsteigen
ankommen
bekommen
aussteigen
fernsehen
einkaufen
anrufen
nehmen
besuchen
suchen
```

producing...

```
# infinitive, indicative/present/ich, indicative/present/du, indicative/present/er, indicative/present/wir, indicative/present/ihr, indicative/present/Sie
mitbringen,bringe mit,bringst mit,bringt mit,bringen mit,bringt mit,bringen mit
umsteigen,steige um,steigst um,steigt um,steigen um,steigt um,steigen um
abholen,hole ab,holst ab,holt ab,holen ab,holt ab,holen ab
abfahren,fahre ab,fährst ab,fährt ab,fahren ab,fahrt ab,fahren ab
einsteigen,steige ein,steigst ein,steigt ein,steigen ein,steigt ein,steigen ein
ankommen,komme an,kommst an,kommt an,kommen an,kommt an,kommen an
bekommen,bekomme,bekommst,bekommt,bekommen,bekommt,bekommen
aussteigen,steige aus,steigst aus,steigt aus,steigen aus,steigt aus,steigen aus
fernsehen,sehe fern,siehst fern,sieht fern,sehen fern,seht fern,sehen fern
einkaufen,kaufe ein,kaufst ein,kauft ein,kaufen ein,kauft ein,kaufen ein
anrufen,rufe an,rufst an,ruft an,rufen an,ruft an,rufen an
nehmen,nehme,nimmst,nimmt,nehmen,nehmt,nehmen
besuchen,besuche,besuchst,besucht,besuchen,besucht,besuchen
suchen,suche,suchst,sucht,suchen,sucht,suchen
```