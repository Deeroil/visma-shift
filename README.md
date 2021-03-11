# visma-shift

Visman ohjelmointitehtävä 2021

Esittelee luokan Shift käyttöä, yksinkertaisen UI:n avulla.
Shift ottaa vastaan 3 parametriä
- date: päivämäärä, Javascript Date object
- start: aloituskellonaika, String muodossa HH:MM
- finish: lopetuskellonaika, String muodossa HH:MM

Luokka validoi konstruktorissa parametrit.
Lopuksi luokka laskee itselleen propertyn length, joka kuvaa validin työvuoron pituutta tunneissa, desimaaleina. Vuoron pituudella on myös rajoitteita jotka tarkistetaan.

Luokka ei säilytä/tallenna annettuja parametreja propertyinä.
Se ainoastaan validoi ne ja asettaa pituuden vuorolle.

---

Miten ymmärsin annetun ongelman:
- Tee luokka, syötä sille spesifinlaisia parametrejä (3 tai ehkä jonkun tulkinnan mukaan 2), validoi luokan sisällä että vaikuttaa oikealta (keskeytä jos ongelmia), ja anna keino saada luodulta objektilta työvuoron pituus tunneissa. Tee joku UI/komentorivikäli/tmv joka hyödyntää luokkaa. Käytä OOP periaatteita.

Haasteet:
- JS:n Date-oliot ei olleet kovin tuttuja, OOP:sta myös hetki
- pohdinta, haluanko toteuttaa luokan/validoinnin backendissä vai jättää backendin kokonaan pois
- oon käyttänyt enemmän Reactia kuin frameworkitöntä browser-side JS, niin esim scopen muuttuminen globaalista Shift-luokan importtaamisen jälkeen aiheutti päänvaivaa hetkeksi.

Parannuskohtia:
- Regexillä uskon että olisi siistimpää/lyhyempää validoida, vaikka ehkä epäselvempää lukea
- Erimuotoisten päivämäärien ja aikojen käsittely
  - Aika: Luokka voisi osata validoida myös muussa kuin HH:MM -muodossa olevat ajat
  - Date.parse() on vähän huono valinta (lisää tästä kompromissiosiossa), joten luokka itsessään ei luotettavasti käsittele kaikkia mahdollisia annettavia päivämääriä. UI karsii tällä hetkellä osan pois.
  - momentjs-kaltainen kirjasto voisi auttaa? (näemmä momentjs on deprekoitu)
- UI vois olla nätimpi (tyylittely), ja kivemmat UI-elementit
  - vuoron pituus div-elementissä on vähän tönkkö. Lisäksi tekstin voisi tyhjennetää kun inputtien arvoja muutetaan ja jos seuraava annettu vuoro heittää virheen.
- Error-viestit voisivat olla paremmin (ei-koodari)käyttäjää ajatellen muotoillut
- Luokan nimi voisi olla jokin muu kuin Shift, etenkin kun se ei tallenna muuta kuin pituuden.
- Kaipaisin sinänsä että työvuoro voisi ulottua yön yli (erillinen asia, tehtävän ulkopuolella)

Kompromisseja:
- Päivämäärä: Datetimen sijaan käytössä on Date. Ei sinänsä kompromissi, kun kyseessä JS.
- JS:llä private propertyt on vasta stage 3 vaiheessa, joten en käyttänyt niitä vaikka se olisi tuntunut sopivalta etenkin date:n tallentaminen. Toisaalta, luokan funktio voi olla pelkästään validoida eikä tallentaa.
- Date.parse() ja sen ongelmat string-muotoisten merkkijonojen kanssa.
  - esimerkki: new Date(x):n tuottama päivämäärä on eri silloin kun x sisältö on "2016/03/28" tai "2016-03-28" (toinen tulkitsee UTC:n mukaan ja toinen ottaa huomioon timezonen).
  - Tehtävän pikatoteutukseen Date.parse() toimii tarpeeksi ok, mutta on puutteellinen silti.
- Työvuoron pituuden saaminen: päätös get ja propertyn välillä. Jos työvuoron pituus lasketaan vasta funktiota/getteriä kutsuttaessa, se ei heitä virhettä objektin luonnin aikana. Päädyin tallentamaan length-tiedon propertynä, vaikka sen voi objektin luomisen jälkeen muuttaa helposti.