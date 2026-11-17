# Pepe Dome: Bilder für die Vereinsseite

Stand: 17.11.2026. 26 Fotos aus dem Repo `build-with-chris/pepe-dome`.

Die Dateien halten die Bildregeln der Vereinsseite ein: WebP, keine Leerzeichen oder Umlaute im Namen, längste Kante höchstens 2400 px, keine Datei über 500 KB. Breite, Höhe und Alt-Text stehen fertig in `src/content/domeBilder.ts`. Die Maße sind an der Datei ausgelesen, die Alt-Texte am Bild geprüft.

## Warum diese Auswahl

Die Vereinsseite hat bisher kein Foto, das den Dome zeigt. `the-dome.webp` ist eine Grafik von oben, die 17 Disziplinenbilder zeigen laut ihren Bildbeschreibungen fast alle andere Orte (Bahngelände, Spielplatz, Feuerwehrauto, Studio). Für Förderer und Sponsoren fehlt damit der Beleg, dass es den Ort gibt und dass dort Publikum sitzt. Ausgewählt wurde deshalb nach vier Fragen:

- Wie sieht der Ort aus? (Thema `ort`)
- Kommen Menschen? (Thema `publikum`)
- Was passiert auf der Bühne? (Thema `show`, `technik`)
- Wie ist er entstanden? (Thema `aufbau`)

## Die Bilder

| Datei in `public/images/dome/` | Maße | Thema | Anlass | Herkunft im Dome-Repo |
|---|---|---|---|---|
| `kuppel-nacht.webp` | 1440 x 1080 | ort | unbekannt | `public/GeodomeEvening.webp` |
| `kuppel-herbst.webp` | 1800 x 1198 | ort | Freeman Festival | `public/images/festival/freeman-kuppel-herbst.webp` |
| `kuppel-cafe-wiese.webp` | 1448 x 1086 | ort | unbekannt | `public/images/cafe/cafe-hero.webp` |
| `kuppel-innen-buehne.webp` | 1080 x 810 | ort | unbekannt | `public/images/Aufbau/dome-interior.jpg` |
| `kuppel-tragwerk-innen.webp` | 810 x 1080 | ort | unbekannt | `public/images/Aufbau/dome-audience-01.webp` |
| `publikum-volle-reihen.webp` | 1800 x 1200 | publikum | Flower Festival | `public/images/dome/flower-publikum-kuppel.webp` |
| `sitzkreis-kuppel.webp` | 2276 x 1280 | publikum | Freeman Festival | `public/images/Kategorien/Community.webp` |
| `garten-wimpelkette.webp` | 1800 x 1200 | publikum | Flower Festival | `public/images/festival/flower-garten-blumen.webp` |
| `basteltisch.webp` | 1800 x 1200 | publikum | Flower Festival | `public/images/festival/flower-basteltisch.webp` |
| `kartentrick.webp` | 1800 x 1200 | publikum | Flower Festival | `public/images/festival/flower-kartentrick.webp` |
| `partnerakrobatik-publikum.webp` | 1800 x 1200 | show | Flower Festival | `public/images/dome/flower-partnerakrobatik.webp` |
| `cyr-wheel-buehne.webp` | 1800 x 1200 | show | Flower Festival | `public/images/dome/flower-cyr-wheel-buehne.webp` |
| `offene-buehne-getraenkekisten.webp` | 1800 x 1198 | show | Freeman Festival | `public/images/festival/freeman-buehne-getraenkekisten.webp` |
| `vertikaltuch-blau.webp` | 1800 x 1085 | show | Freeman Festival | `public/images/festival/freeman-vertikaltuch-blau.webp` |
| `rollschuhe-gruppe.webp` | 1800 x 1246 | show | Freeman Festival | `public/images/festival/freeman-rollschuhe-gruppe.webp` |
| `jonglage-keulen.webp` | 1201 x 1800 | show | Freeman Festival | `public/images/festival/freeman-jonglage-keulen.webp` |
| `schlussapplaus.webp` | 1800 x 1200 | show | Circus & Poetry | `public/images/circus-poetry/schlussapplaus.webp` |
| `rigging-kuppelspitze.webp` | 1196 x 1800 | technik | Freeman Festival | `public/images/festival/freeman-rigging.webp` |
| `aufbau-tragwerk-kran.webp` | 810 x 1080 | aufbau | unbekannt | `public/images/Aufbau/dome-aerial-01.webp` |
| `aufbau-holzknoten.webp` | 1080 x 607 | aufbau | unbekannt | `public/images/Aufbau/dome-outdoor-hero.webp` |
| `aufbau-balken-tragen.webp` | 810 x 1080 | aufbau | unbekannt | `public/images/Aufbau/dome-night-01.webp` |
| `aufbau-kuppelhaut.webp` | 1080 x 810 | aufbau | unbekannt | `public/images/Aufbau/dome-exterior.webp` |
| `aufbau-geruest-wolken.webp` | 810 x 1080 | aufbau | unbekannt | `public/images/Aufbau/dome-event-01.webp` |
| `aufbau-theatron-bauteile.webp` | 810 x 1080 | aufbau | unbekannt | `public/images/Aufbau/dome-night-02.webp` |
| `aufbau-tieflader.webp` | 810 x 1080 | aufbau | unbekannt | `public/images/Aufbau/dome-performance-01.webp` |
| `cafe-kueche.webp` | 1800 x 1200 | cafe | Flower Festival | `public/images/cafe/flower-kueche.webp` |

Der Anlass ist aus dem Ordner- oder Dateinamen im Dome-Repo abgeleitet. „unbekannt“ heißt: Das Repo sagt nichts dazu.

Die Dateinamen im Dome-Repo beschreiben den Inhalt oft nicht. `dome-night-01.webp` zeigt Leute, die tagsüber einen Balken tragen, `dome-audience-01.webp` eine leere Kuppel. Die Namen in diesem Paket sind deshalb neu vergeben.

## Wo welches Bild passt

Vorschläge, keine Vorgabe.

| Stelle auf der Vereinsseite | Bilder |
|---|---|
| Startseite, Einstieg (vollflächig, Querformat) | `kuppel-nacht`, `publikum-volle-reihen`, `partnerakrobatik-publikum` |
| Über uns, „Unser Ort“ | `kuppel-herbst`, `kuppel-innen-buehne`, `kuppel-cafe-wiese` |
| Startseite, Storytelling „Unter der Kuppel passiert was“ | `sitzkreis-kuppel`, `cyr-wheel-buehne` |
| Format „Open Stage“ | `offene-buehne-getraenkekisten` |
| Format „Show“ | `vertikaltuch-blau`, `rollschuhe-gruppe`, `schlussapplaus` |
| Format „Workshops“ | `basteltisch` |
| Förderung, Mehrwert „Stadtgesellschaft und Begegnung“ | `garten-wimpelkette`, `kartentrick`, `publikum-volle-reihen` |
| Förderung und Sponsoring, Umbau und Technikpodium | `rigging-kuppelspitze`, `kuppel-tragwerk-innen` |
| Über uns, Entstehung des Ortes | die sieben `aufbau-*` als Reihe |
| Blogbeitrag zum Aufbau | die sieben `aufbau-*` |

Zur Auflösung: Die Aufbau-Fotos und die beiden Innenansichten sind Handyfotos mit 1080 px an der langen Kante. Für eine Reihe oder eine halbe Spalte reicht das, für ein vollflächiges Bild nicht. Vollflächig taugen nur die Bilder ab 1800 px Breite.

Zu dunklen Bildern: `vertikaltuch-blau`, `rigging-kuppelspitze` und `offene-buehne-getraenkekisten` sind sehr dunkel. Auf dem hellen Grund der Vereinsseite wirken sie als schwarze Fläche. Am besten in einem blauen oder dunklen Abschnitt einsetzen.

## Förderleiste

Nicht im Paket, weil sie im Arbeitsstand der Vereinsseite vom 17.11.2026 schon liegt: `public/images/logos/foerderleiste.png`, 1400 x 193, bytegleich mit der Datei im Dome-Repo. Rechts steht „Landeshauptstadt München Kulturreferat“ statt des Stadtwappens mit „Landeshauptstadt München“. Das Kulturreferat hat darum gebeten (Kommentar in `src/data/supporters.ts` im Dome-Repo). Dort steht auch der geprüfte Alt-Text.

## Offen: Bildrechte

- **Fotografen.** Im Dome-Repo ist bei keinem Bild ein Name hinterlegt. `credit` ist überall leer. Die Namen kommen von Chris.
- **Erkennbare Gäste.** Auf `publikum-volle-reihen`, `garten-wimpelkette`, `kartentrick`, `sitzkreis-kuppel`, `basteltisch` und `cafe-kueche` sind Besucherinnen und Besucher zu erkennen. Die Bilder stehen schon öffentlich in der Galerie auf pepe-dome.de. Ob die Einwilligung auch die Vereinsseite und Unterlagen für Sponsoren abdeckt, ist nicht belegt.
- **Artistinnen und Artisten.** Für die Showbilder gilt dasselbe, vor allem bei Einsatz in Sponsoring-Unterlagen.

## Bewusst nicht übernommen

| Was | Warum |
|---|---|
| Kursbilder (`public/kurse/`, `public/Kursbilder/`) | Keines zeigt den Dome. Die drei Bilder zu Urban Acrobatics zeigen eine Bühne von Red Bull BC One mit Sponsorenlogo. Das Cyr-Wheel-Motiv gibt es auf der Vereinsseite schon, das Bild mit Clown und Kind wurde dort im Redesign gerade entfernt. |
| `public/images/artists/` | Porträts einzelner Personen, gehören zur Künstlerverwaltung des Dome. |
| `public/images/shows/` | Nicht einzeln gesichtet. Laut den Bildbeschreibungen in `src/data/gallery.ts` großteils nicht im Dome aufgenommen (Flussufer, Zelt im Freien, schwarze Bühne). Mehrere Motive ähneln den Disziplinenbildern der Vereinsseite. |
| `public/images/circus-poetry/` bis auf den Schlussapplaus | Nicht einzeln gesichtet. Laut Bildbeschreibung hochformatige Nahaufnahmen einer einzelnen Produktion auf dunkler Bühne. |
| Plakate und Flyer (`PosterFreeMan/`, `Tsirk.webp`, `Morphe.webp` und ähnliche) | Werbemittel einzelner Veranstaltungen, teils von Dritten. |
| `public/dome-atmosphaere/`, `public/Pepe Dome - Circus and Poetry/`, der Freeman-Ordner (1,3 GB) | Kamera-Originale. Die verkleinerten Fassungen daraus sind oben enthalten. |
| `Kategorien/Location.webp` | Engerer Ausschnitt von `kuppel-nacht`. |
| `festival/freeman-sitzkreis.webp` | Dasselbe Bild wie `sitzkreis-kuppel`, nur kleiner. |
| `festival/freeman-publikum-lachen.webp`, `freeman-kerze.webp`, `freeman-portrait-artistin.webp` | Nahaufnahmen einzelner Personen, die beiden letzten laut Bildbeschreibung. |

## Videos

Nicht kopiert: zu groß für dieses Paket und inhaltlich ungeprüft. Vorhanden im Dome-Repo unter `public/videos/`:

| Datei | Größe |
|---|---|
| `PepeDome-Atmosphaere.mp4` | 7,4 MB |
| `vertical-02.mp4` | 4,3 MB |
| `Dome Hochkant.mp4` | 2,9 MB |
| `vertical-01.mp4` | 1,6 MB |
| `vertical-03.mp4` | 1,1 MB |
| `showreel.mp4` | 1,1 MB |
| `hero-mobile.mp4` | 0,9 MB |

Was die Videos zeigen, wurde nicht geprüft.
