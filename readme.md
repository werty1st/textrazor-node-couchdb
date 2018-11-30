# Demo create Job

* Checkout
* cd to **dummy-client**
* npm install

```bash
TARGET=https://rz.dpa.aws.heman.io node demofeeder.js
314358 Zwei Verletzte bei Verkehrsunfall
{ message: 'saved job',
  id: '1bb194c9df9c9cf8',
  sourceId: '314358' }
314389 Betrug in Klagenfurt/WS
{ message: 'saved job',
  id: 'b4e81f30d686c7f8',
  sourceId: '314389' }
314160 versuchte Brandstiftung in Frastanz
{ message: 'saved job',
  id: '388e52893aa07de8',
  sourceId: '314160' }
314272 Verkehrsunfall mit Personenschaden im Bezirk Korneuburg
{ message: 'saved job',
  id: '24353db9087eba7e',
  sourceId: '314272' }
...
```

# Get Results


```bash
curl -s https://rz.dpa.aws.heman.io/result/388e52893aa07de8 | jq .
```

```json
{
  "_id": "388e52893aa07de8",
  "_rev": "3-81933f90343030e33e6494e6c34d03d2",
  "status": "done",
  "payload": {
    "source_id": "314160",
    "title": "versuchte Brandstiftung in Frastanz",
    "text": "Allgemeines\nPresseaussendung der Polizei Vorarlberg\nGestern, 23.11.2018, gegen 23:15, wurde die Feuerwehr zu einem Mehrparteienhaus in Frastanz gerufen. Dort war es im dritten Stock zu einer starken Rauchentwicklung gekommen. Offenbar war versucht worden, die Eingangstür einer dort befindlichen Wohnung vermutlich mittels Benzin anzuzünden. Beim Eintreffen der Feuerwehr war das Feuer aber bereits erloschen. Dennoch mussten aufgrund des starken Rauches alle Bewohner des dritten Stockes evakuiert werden. Ihre Wohnungen sind vorrübergehend unbewohnbar. \nDer 35jährige Bewohner war zum Vorfallszeitpunkt nicht in seiner Wohnung. Als tatverdächtig gilt ein 47jähriger Mann, der schon zu einem früheren Zeitpunkt Drohungen gegen den 35jährigen geäußert haben soll. Hintergrund dürften persönliche Streitigkeiten gewesen sein. Der Tatverdächtige konnte nach einer Sofortfahndung der Polizei in einem Lokal in Koblach aufgegriffen und laut Anordnung der Staatsanwaltschaft verhaftet werden.\nPolizeiinspektion Frastanz, Tel. +43 (0) 59 133  8156",
    "date": "2018-11-24",
    "time": "10:32:00",
    "updated": "2018-11-29T19:06:01+00:00",
    "county": "vbg",
    "tags": []
  },
  "createdAt": 1543594137327,
  "result": {
    "response": {
      "coarseTopics": [
        {
          "id": 0,
          "label": "Violence",
          "wikiLink": "http://en.wikipedia.org/Category:Violence",
          "score": 1
        },
        {
          "id": 1,
          "label": "Politics",
          "wikiLink": "http://en.wikipedia.org/Category:Politics",
          "score": 0.8575
        }
      ],
      "language": "ger",
      "languageIsReliable": true,
      "topics": [
        {
          "id": 0,
          "label": "Fire",
          "wikiLink": "http://en.wikipedia.org/Category:Fire",
          "score": 0.4621,
          "wikidataId": "Q3196"
        },
        {
          "id": 1,
          "label": "Hazards",
          "wikiLink": "http://en.wikipedia.org/Category:Hazards",
          "score": 0.3992
        },
        {
          "id": 2,
          "label": "Combustion",
          "wikiLink": "http://en.wikipedia.org/Category:Combustion",
          "score": 0.2958,
          "wikidataId": "Q133235"
        },
        {
          "id": 3,
          "label": "Emergency services",
          "wikiLink": "http://en.wikipedia.org/Category:Emergency_services",
          "score": 0.2884,
          "wikidataId": "Q814610"
        },
        {
          "id": 4,
          "label": "Emergency management",
          "wikiLink": "http://en.wikipedia.org/Category:Emergency_management",
          "score": 0.2787,
          "wikidataId": "Q1460420"
        },
        {
          "id": 5,
          "label": "Crimes",
          "wikiLink": "http://en.wikipedia.org/Category:Crimes",
          "score": 0.2679,
          "wikidataId": "Q1184244"
        },
        {
          "id": 6,
          "label": "Firefighting",
          "wikiLink": "http://en.wikipedia.org/Category:Firefighting",
          "score": 0.2426,
          "wikidataId": "Q897825"
        },
        {
          "id": 7,
          "label": "Frastanz",
          "wikiLink": "http://en.wikipedia.org/Frastanz",
          "score": 0.2425,
          "wikidataId": "Q698577"
        },
        {
          "id": 8,
          "label": "Violence",
          "wikiLink": "http://en.wikipedia.org/Category:Violence",
          "score": 0.2379,
          "wikidataId": "Q124490"
        },
        {
          "id": 9,
          "label": "Public services",
          "wikiLink": "http://en.wikipedia.org/Category:Public_services",
          "score": 0.2344,
          "wikidataId": "Q161837"
        },
        {
          "id": 10,
          "label": "Fire departments",
          "wikiLink": "http://en.wikipedia.org/Category:Fire_departments",
          "score": 0.2277,
          "wikidataId": "Q6498663"
        },
        {
          "id": 11,
          "label": "Human rights abuses",
          "wikiLink": "http://en.wikipedia.org/Category:Human_rights_abuses",
          "score": 0.2261,
          "wikidataId": "Q11376059"
        },
        {
          "id": 12,
          "label": "Public safety",
          "wikiLink": "http://en.wikipedia.org/Category:Public_safety",
          "score": 0.2237,
          "wikidataId": "Q294240"
        },
        {
          "id": 13,
          "label": "Crime",
          "wikiLink": "http://en.wikipedia.org/Category:Crime",
          "score": 0.2202,
          "wikidataId": "Q83267"
        },
        {
          "id": 14,
          "label": "Security",
          "wikiLink": "http://en.wikipedia.org/Category:Security",
          "score": 0.2116,
          "wikidataId": "Q2526135"
        },
        {
          "id": 15,
          "label": "Man-made disasters",
          "wikiLink": "http://en.wikipedia.org/Category:Man-made_disasters",
          "score": 0.2085
        },
        {
          "id": 16,
          "label": "Vorarlberg",
          "wikiLink": "http://en.wikipedia.org/Vorarlberg",
          "score": 0.2001,
          "wikidataId": "Q38981"
        },
        {
          "id": 17,
          "label": "Injustice",
          "wikiLink": "http://en.wikipedia.org/Category:Injustice",
          "score": 0.1896,
          "wikidataId": "Q770480"
        },
        {
          "id": 18,
          "label": "Law enforcement",
          "wikiLink": "http://en.wikipedia.org/Category:Law_enforcement",
          "score": 0.1857,
          "wikidataId": "Q44554"
        },
        {
          "id": 19,
          "label": "Safety",
          "wikiLink": "http://en.wikipedia.org/Category:Safety",
          "score": 0.1769,
          "wikidataId": "Q10566551"
        },
        {
          "id": 20,
          "label": "Prevention",
          "wikiLink": "http://en.wikipedia.org/Category:Prevention",
          "score": 0.1715,
          "wikidataId": "Q13012879"
        },
        {
          "id": 21,
          "label": "Fires",
          "wikiLink": "http://en.wikipedia.org/Category:Fires_by_type",
          "score": 0.1695
        },
        {
          "id": 22,
          "label": "Criminal law",
          "wikiLink": "http://en.wikipedia.org/Category:Criminal_law",
          "score": 0.1676,
          "wikidataId": "Q146491"
        },
        {
          "id": 23,
          "label": "Disasters",
          "wikiLink": "http://en.wikipedia.org/Category:Disasters",
          "score": 0.1635,
          "wikidataId": "Q3839081"
        },
        {
          "id": 24,
          "label": "Institutional abuse",
          "wikiLink": "http://en.wikipedia.org/Category:Institutional_abuse",
          "score": 0.152,
          "wikidataId": "Q16000123"
        },
        {
          "id": 25,
          "label": "Public administration",
          "wikiLink": "http://en.wikipedia.org/Category:Public_administration",
          "score": 0.152,
          "wikidataId": "Q31728"
        },
        {
          "id": 26,
          "label": "Causes of death",
          "wikiLink": "http://en.wikipedia.org/Category:Causes_of_death",
          "score": 0.1517,
          "wikidataId": "Q1931388"
        },
        {
          "id": 27,
          "label": "Fire department",
          "wikiLink": "http://en.wikipedia.org/Fire_department",
          "score": 0.1412,
          "wikidataId": "Q6498663"
        },
        {
          "id": 28,
          "label": "Misconduct",
          "wikiLink": "http://en.wikipedia.org/Category:Misconduct",
          "score": 0.1401,
          "wikidataId": "Q6875295"
        },
        {
          "id": 29,
          "label": "Koblach",
          "wikiLink": "http://en.wikipedia.org/Koblach",
          "score": 0.1273,
          "wikidataId": "Q540301"
        },
        {
          "id": 30,
          "label": "Political repression",
          "wikiLink": "http://en.wikipedia.org/Category:Political_repression",
          "score": 0.1239,
          "wikidataId": "Q1899269"
        },
        {
          "id": 31,
          "label": "Politics",
          "wikiLink": "http://en.wikipedia.org/Category:Politics",
          "score": 0.1234,
          "wikidataId": "Q7163"
        },
        {
          "id": 32,
          "label": "Abuse",
          "wikiLink": "http://en.wikipedia.org/Category:Abuse",
          "score": 0.1205,
          "wikidataId": "Q600571"
        },
        {
          "id": 33,
          "label": "Aggression",
          "wikiLink": "http://en.wikipedia.org/Category:Aggression",
          "score": 0.1194,
          "wikidataId": "Q191797"
        },
        {
          "id": 34,
          "label": "Public sector",
          "wikiLink": "http://en.wikipedia.org/Category:Public_sector",
          "score": 0.1123,
          "wikidataId": "Q294217"
        },
        {
          "id": 35,
          "label": "Conflicts",
          "wikiLink": "http://en.wikipedia.org/Category:Conflicts",
          "score": 0.1084,
          "wikidataId": "Q180684"
        },
        {
          "id": 36,
          "label": "Persecution",
          "wikiLink": "http://en.wikipedia.org/Category:Persecution",
          "score": 0.1045,
          "wikidataId": "Q851824"
        },
        {
          "id": 37,
          "label": "Attacks",
          "wikiLink": "http://en.wikipedia.org/Category:Attacks",
          "score": 0.0952
        },
        {
          "id": 38,
          "label": "Controversies",
          "wikiLink": "http://en.wikipedia.org/Category:Controversies",
          "score": 0.09424,
          "wikidataId": "Q1255828"
        },
        {
          "id": 39,
          "label": "Justice",
          "wikiLink": "http://en.wikipedia.org/Category:Justice",
          "score": 0.09413,
          "wikidataId": "Q5167661"
        },
        {
          "id": 40,
          "label": "Murder",
          "wikiLink": "http://en.wikipedia.org/Category:Murder",
          "score": 0.09224,
          "wikidataId": "Q132821"
        },
        {
          "id": 41,
          "label": "Hate crimes",
          "wikiLink": "http://en.wikipedia.org/Category:Hate_crimes",
          "score": 0.08961,
          "wikidataId": "Q459409"
        },
        {
          "id": 42,
          "label": "International criminal law",
          "wikiLink": "http://en.wikipedia.org/Category:International_criminal_law",
          "score": 0.07874,
          "wikidataId": "Q1055905"
        },
        {
          "id": 43,
          "label": "National security",
          "wikiLink": "http://en.wikipedia.org/Category:National_security",
          "score": 0.0737,
          "wikidataId": "Q258307"
        },
        {
          "id": 44,
          "label": "Social conflict",
          "wikiLink": "http://en.wikipedia.org/Category:Social_conflict",
          "score": 0.06975,
          "wikidataId": "Q2672648"
        },
        {
          "id": 45,
          "label": "Human rights",
          "wikiLink": "http://en.wikipedia.org/Category:Human_rights",
          "score": 0.0678,
          "wikidataId": "Q8458"
        },
        {
          "id": 46,
          "label": "Deviance (sociology)",
          "wikiLink": "http://en.wikipedia.org/Category:Deviance_(sociology)",
          "score": 0.06178,
          "wikidataId": "Q623184"
        },
        {
          "id": 47,
          "label": "Public sphere",
          "wikiLink": "http://en.wikipedia.org/Category:Public_sphere",
          "score": 0.05869,
          "wikidataId": "Q17945"
        },
        {
          "id": 48,
          "label": "Human activities",
          "wikiLink": "http://en.wikipedia.org/Category:Human_activities",
          "score": 0.05157
        }
      ]
    },
    "time": 0.05096,
    "ok": true
  }
}
```


