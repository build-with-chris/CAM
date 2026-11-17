# Pepe Dome: Fakten für die Vereinsseite

Stand: 17.11.2026. Quelle ist das Repo `build-with-chris/pepe-dome` (Website pepe-dome.de).
Hinter jeder Angabe steht die Datei, aus der sie stammt. Was hier nicht steht, ist im Dome-Repo nicht belegt und wird nicht ergänzt, sondern bei Chris erfragt.

Regeln für die Arbeit mit dieser Datei:

- Nur übernehmen, was hier steht. Keine Zahlen, Zitate oder Namen dazuerfinden.
- Abschnitt 11 (Widersprüche) lesen, bevor ein Text zum Ort, zur Gemeinnützigkeit oder zur Platzzahl entsteht.
- Kurse, Termine und Preise ändern sich. Auf der Vereinsseite nicht nachbauen, sondern auf pepe-dome.de verlinken.

## 1. Verhältnis Verein und Dome

- Der Circus Akademie München e.V. betreibt den Pepe Dome seit dem 1.1.2026 und ist Verantwortlicher für die Daten. (`pepe-dome-mithelfen/README.md`, `src/dictionaries/de.json` → `about.background.p4`)
- Der Verein ist Vertragspartner und Veranstalter laut AGB des Dome. (`src/app/[lang]/agb/page.tsx`)
- Der Verein steht als Betreiber im Impressum des Dome. (`src/app/[lang]/impressum/page.tsx`)
- Die Spendenseite des Dome nennt den Verein als Träger und Kontoinhaber. (`src/app/[lang]/spenden/page.tsx`)

Auf der veröffentlichten Vereinsseite (Branch `main`) steht der Betrieb des Dome nicht ausdrücklich, dort ist vom „festen Veranstaltungsort im Geodome“ die Rede. Im Arbeitsstand des Redesigns vom 17.11.2026 gibt es in `site.ts` schon den Satz „Der Circus Akademie München e.V. betreibt seit 2026 den Pepe Dome im Münchner Ostpark.“

## 2. Der Ort

| Angabe | Wert | Quelle |
|---|---|---|
| Name | Pepe Dome im Theatron im Ostpark | `src/data/content.json` → `contact.info.address` |
| Adresse | Albert-Schweitzer-Straße 62, 81735 München | `src/data/content.json` → `site.address` |
| Stadtteil | Neuperlach | `de.json` → `about.background.p3` |
| Bauform | geodätische Kuppel | `de.json` → `about.story.text` |
| Durchmesser | 22 Meter | `de.json` → `about.story.text` |
| Höhe | 8,5 Meter | `de.json` → `about.story.text`, `training.location.ceiling` |
| Sitzplätze | 170 | `de.json` → `about.background.p1` |
| Zugang | barrierearm, Begleitperson empfohlen | `de.json` → `training.location.accessText` |
| Eröffnung | 1. August 2025 | `de.json` → `about.story.text` |

Anreise (`de.json` → `anreise`):

- Der Dome liegt mitten im Ostpark und nicht an einer Straße. Eine Adresse, die bis vor die Tür führt, gibt es nicht.
- U5 bis Quiddestraße, Eingang in den Park am Abenteuerspielplatz Maulwurfshausen, dann geradeaus.
- Parken am Michaelibad, rund 200 Plätze, etwa 15 Minuten zu Fuß.
- In Google Maps nach „Pepe Dome“ oder „Theatron im Ostpark“ suchen.

## 3. Geschichte

Wörtlich von der Über-uns-Seite des Dome (`de.json` → `about.story`, `about.background`):

- 2006 begann die Suche nach einem Raum für zeitgenössischen Zirkus.
- Temporäre Standorte davor: MUCCA, CircusHub, Sugar Mountain.
- Offizielle Eröffnung am 1. August 2025 im Ostpark.
- Die Kuppel stand zuvor schon einmal temporär an derselben Stelle, als Lunatico Theaterzelt.
- Das Objekt kam im Rahmen des Neighbourhoods-Projekts und der Auflösung der Festspielhaus GmbH zum Team. (Im Dome-Text steht „Nebourhoods Projektes“, vermutlich ein Tippfehler. Schreibweise bei Chris klären.)
- Ziel: eine dauerhafte kulturelle Heimat in Neuperlach. Es laufen Gespräche, den Dome langfristig in die Stadtentwicklungspläne aufzunehmen.

## 4. Was im Dome passiert

Drei Bereiche laut Über-uns-Seite (`de.json` → `about.areas`):

**Kultur**
- zeitgenössische Zirkusshows und Gastspiele
- Festivalformate, genannt werden Freeman Festival, Zeit für Zirkus, Spiel:Art
- Community-Events: Netzwerktreffen, Themen-Abende, Kino im Dome
- Kinderprogramm: Kasperltheater, Clownshows, Vorstellungen von Kinder- und Jugendzirkus

**Bildung**
- offene Trainings für Profis, gefördert durch das Kulturreferat
- Kurse und Workshops für Einsteiger bis Fortgeschrittene
- Angebote für Kinder, Jugendliche, Seniorinnen und Senioren
- pädagogische Programme und Kooperationen mit Schulen und Kulturinstitutionen
- „Ausbildung zum Zirkuspädagogen Artisten“ (so im Dome-Text, Formulierung unklar, vor Übernahme klären)

**Forschung**
- Kooperationen mit dem Stadtteilmanagement zum Thema Nachhaltigkeit
- Kooperationen mit Universitäten
- Movement and sustainability
- Design Thinking für Lehrer

Vision und Mission (`de.json` → `about.vision`, `about.mission`):

- Vision: Der Pepe Dome wird ein langfristiger, lebendiger Ort für zeitgenössischen Zirkus, kulturelle Begegnung, künstlerische Ausbildung, Community-Programme und öffentlich zugängliche Events.
- Mission: Förderung von zeitgenössischer Zirkuskunst und kultureller Teilhabe in München, verbunden mit inklusiven Bildungs- und Trainingsangeboten. Kulturfokus Ostpark.

Netzwerke (`de.json` → `about.network.items`): Buzz Mitglied, Netzwerk Freie Szene München, LAG Zirkuspädagogik, Support SK3.

## 5. Kursprogramm

Live abgelesen von pepe-dome.de/de/training am 17.11.2026. Die Kurse liegen in der Datenbank und werden im Admin gepflegt, dieser Stand veraltet also.

| Kurs | Für wen | Leitung | Zeit |
|---|---|---|---|
| Luftakrobatik Bambinis | 4 bis 7 Jahre | Aircrobatics | Mo 16:30 bis 17:30, Mi 17:30 bis 18:30 |
| Luftakrobatik | Jugendliche | Aircrobatics | Mo 17:30 bis 18:30, Mi 18:30 bis 19:30 |
| Kinder-Capoeira | 3 bis 6 Jahre | Dayela | Di 16:15 bis 17:15 |
| Capoeira Workout | Erwachsene | Dayela | Di 17:30 bis 19:00 |
| Artistik für Kinder | 5 bis 12 Jahre | Michael | Mi 16:30 bis 18:00 |
| Urban Acrobatics | Jugendliche und Erwachsene | Dani | Fr 15:30 bis 17:00 |
| Cyr Wheel | Jugendliche und Erwachsene, an showfreien Freitagen | Chris | Fr 17:00 bis 18:30 |

Weitere Angaben (`de.json` → `training`):

- Schnupperstunde ab 12 €. Einstieg jederzeit.
- Buchung der Dome-Kurse über Eversports, spontan kommen und bar zahlen geht auch.
- Luftakrobatik veranstaltet der Partner Aircrobatic Studios, gebucht wird dort: https://aircrobaticstudios.de/
- Profitraining: untertags, offenes Training für Münchens Profi-Artistinnen und -Artisten, gefördert vom Kulturreferat. Zeiten laufen über eine WhatsApp-Gruppe, Zugang auf Anfrage über das Kontaktformular des Dome mit Betreff „Profitraining“.
- Donnerstag: Tricking und Breaking in Planung.
- Wellpass und Urban Sports Club sind in Vorbereitung, noch nicht nutzbar.

Kurstexte im Wortlaut stehen in `scripts/seed-courses.ts` (Stand 28.07.2026, dort heißt „Artistik für Kinder“ noch „Kinder Akrobatik“ und die Luftakrobatik-Zeiten sind älter).

## 6. Café

(`de.json` → `cafe`, `home.cafe`)

- Café am Dome, offen für alle, kein Konsumzwang.
- Ab November nur an Showtagen geöffnet, 2 Stunden vor der Show. Sitzplätze sind nur draußen.
- Liegestühle auf den Stufen des Theatrons, manchmal Live-Musik.

## 7. Förderer

(`src/data/supporters.ts`, `de.json` → `about.supporters.text`)

Pflichttext auf der Förderleiste: „Dieses Projekt wird durch Städtebauförderung in einem Bund-Länder-Programm mit Mitteln des Bundes und des Freistaats Bayern gefördert sowie von der Landeshauptstadt München kofinanziert.“

| Förderer | Beitrag laut Dome-Repo |
|---|---|
| Städtebauförderung von Bund, Ländern und Gemeinden | Bund-Länder-Programm mit Mitteln des Bundes und des Freistaats Bayern, die Landeshauptstadt München finanziert mit |
| Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen | trägt den Anteil des Bundes |
| Bayerisches Staatsministerium für Wohnen, Bau und Verkehr | trägt den Anteil des Freistaats |
| Landeshauptstadt München, Kulturreferat | fördert den Dome als Kulturort, die Stadt finanziert außerdem die Städtebauförderung mit |
| Kreativ München | fördert ebenfalls, unabhängig von der Städtebauförderung. Steht nicht auf der Leiste |

Die Förderleiste wurde geändert: Rechts stand früher das Stadtwappen mit „Landeshauptstadt München“. Das Kulturreferat hat um sein eigenes Logo gebeten. Im Arbeitsstand des Redesigns vom 17.11.2026 ist die neue Leiste schon eingebaut (`public/images/logos/foerderleiste.png`, 1400 x 193, identisch mit der Datei im Dome-Repo) und die alte `foerderlogos.jpg` gelöscht. Committet war das zu dem Zeitpunkt noch nicht.

## 8. Presse

Zitate, die auf der Startseite des Dome stehen (`de.json` → `home.press.quotes`). Vor Übernahme am Artikel gegenlesen.

- Süddeutsche Zeitung: „Wer selber Artist werden möchte, ist im Pepe-Dom bestens aufgehoben.“
- Süddeutsche Zeitung: „Bühne mit 200 Plätzen, Trainingsort, Bildungsstätte und Stadtteiltreff.“
  https://www.sueddeutsche.de/muenchen/zirkus-cirque-du-fleur-pepe-dom-muenchen-shows-li.3471709
- tz: „Heimat für modernen Zirkus im Ostpark.“
  https://www.tz.de/muenchen/stadt/muenchen-perlach-ostpark-pepe-dome-kulturhaus-projekt-heimat-kuenstler-zirkus-artisten-93987038.html

## 9. Kontakt und Vereinsdaten

| Angabe | Wert | Quelle |
|---|---|---|
| E-Mail Dome | info@pepe-dome.de | `src/data/content.json` |
| Telefon und WhatsApp | +49 179 699 0707 | `src/data/content.json` |
| Instagram | https://www.instagram.com/pepe_arts/ (siehe Abschnitt 11, Punkt 7) | `src/data/content.json` |
| Facebook | https://www.facebook.com/pepedome | `src/data/content.json` |
| YouTube | https://www.youtube.com/@pepedome | `src/data/content.json` |
| Vereinsanschrift | Ranhazweg 18, 85521 Ottobrunn | Impressum Dome |
| Register | Amtsgericht München, VR 208483 | Impressum Dome |
| Vorstand laut Register | Doro Auer, Mathias Eder, Marius Eichhöfer, Michael Heiduk, Johannes Thumser, Karl Trautmann | Impressum Dome |

Anschrift, Register und Vorstand stimmen mit dem Impressum der Vereinsseite überein.

## 10. Unterstützen und Mithelfen

Spenden (`src/app/[lang]/spenden/page.tsx`, öffentlich auf pepe-dome.de/spenden):

- Kontoinhaber: Circus Akademie München e.V.
- IBAN: DE36 4306 0967 1379 5914 00
- Verwendungszweck: Unterstützung Pepe Dome
- PayPal: https://paypal.me/circusakademie, „an Freunde senden“ wählen
- Hinweis dort: Der Verein ist derzeit nicht als gemeinnützig anerkannt. Es gibt keine Spendenquittung, Zuwendungen sind steuerlich nicht absetzbar.

Mithelfen (`pepe-dome-mithelfen/`, `src/data/mithelfen.json`):

- Auf pepe-dome.de entsteht eine Helferseite unter `/mithelfen`, zurzeit versteckt zum Testen.
- Bereiche: Café und Bar, Aufbau und Umbau, Einlass und Gäste, Verpflegung, Schreiben, Website und Social Media, Events organisieren.
- Zeiten und Schritte der Aufgaben sind Schätzungen und vom Team noch nicht geprüft. Nicht als Fakten zitieren.
- Geplant ist auf der Vereinsseite eine Karte „Im Dome mithelfen“ mit Link auf pepe-dome.de/mithelfen. Der Plan nennt dafür die Seite `/mitmachen`, die es nach dem Redesign nicht mehr gibt. Passender Ort wäre `/unterstuetzen`.

## 11. Widersprüche und offene Punkte

Diese Punkte entscheidet Chris, nicht die KI.

1. **Gemeinnützigkeit.** Die Über-uns-Seite des Dome sagt „Als gemeinnütziger Verein übernimmt die Circus Akademie München e.V. ab 2026 den Betrieb“. Die Spendenseite des Dome sagt, der Verein sei derzeit nicht als gemeinnützig anerkannt. Auf der Vereinsseite wurde der Anspruch schon entfernt. Dort also nichts von „gemeinnützig“ schreiben. Der Satz steht am 17.11.2026 noch live auf pepe-dome.de/de/about und ist dort zu korrigieren.
2. **Name des Ortes.** Die Vereinsseite schreibt an vielen Stellen „Geodome München“ und „Geodome“ (Förderung, Sponsoring, Storytelling). Der Ort heißt auf seiner eigenen Seite, in Google Maps und in der Presse „Pepe Dome“. Der neue Satz zur Rolle des Vereins im Redesign sagt schon „Pepe Dome“, die übrigen Stellen nicht. Vor einer durchgehenden Umbenennung fragen.
3. **Platzzahl.** Dome-Seite: 170 Sitzplätze. Süddeutsche Zeitung: 200 Plätze. Ein altes Dokument im Dome-Repo (`WEBSITE_CONTENT.md`, Oktober 2025) nennt 200 Plätze und 7 Meter Höhe. Gültig sind 170 Plätze, 22 Meter Durchmesser, 8,5 Meter Höhe.
4. **Barrierefreiheit.** Der Geschichtstext sagt „barrierefreier Zugang“, die Trainingsseite sagt „barrierearm, mit Begleitperson empfohlen“. Die vorsichtigere Angabe verwenden.
5. **Profitraining.** Die Vereinsseite hatte „Mo bis Fr 11 bis 14 Uhr“ (mit der Seite `/ort` entfallen). Der Dome nennt keine festen Zeiten mehr, sie laufen über die WhatsApp-Gruppe.
6. **E-Mail-Adressen.** Dome: info@pepe-dome.de. Impressum der Vereinsseite: info@pepearts.de. Formulare der Vereinsseite: info@circusakademiemünchen.de. Welche Adresse für Fragen zum Dome gilt, ist offen.
7. **Instagram.** Das Dome-Repo nennt `https://www.instagram.com/pepe_arts/` (`src/data/content.json`). Der Arbeitsstand der Vereinsseite nennt `https://www.instagram.com/pepe.dome/`. Welches Konto gilt, ist offen.
8. **Domain des Vereins.** Im Dome-Repo steht als Link zur Akademie `https://circusakademie-muenchen.de` (`src/data/content.json`, Fußbereich). Die echte Domain ist circusakademiemünchen.de. Auf der Live-Seite des Dome (Startseite und Über uns) taucht der falsche Link nicht auf, dort gibt es zurzeit gar keinen Link zur Vereinsseite.
9. **Bildrechte.** Im Dome-Repo ist bei keinem Foto ein Fotograf hinterlegt. Auf mehreren Bildern sind Gäste erkennbar. Siehe `BILDER.md`.

## 12. Nicht verwenden

Diese Dateien im Dome-Repo sehen nach Inhalt aus, sind aber alt oder Beispieldaten:

- `src/data/news.json` und `src/data/events.json`: Beispieldaten aus der Aufbauphase, darunter eine „Silvester-Gala 2025“ und eine „Kooperation mit dem Münchner Stadttheater“. Die echten Termine und News liegen in der Datenbank.
- `src/data/content.json` → `about.collective`: Liste von fünf Partnerorganisationen des „PepeCollective“. Auf der Live-Seite (Startseite und Über uns, geprüft am 17.11.2026) steht sie nicht. Der Link zur Akademie darin ist falsch (Punkt 8).
- `WEBSITE_CONTENT.md`: Stand Oktober 2025, vor dem Redesign. Platzzahl und Höhe darin sind überholt.
- `_old/`: abgelöste Seiten.
