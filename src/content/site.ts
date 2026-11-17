import { domeBilder } from "./domeBilder";

/** Satzung als statische Datei unter public/CAM_satzung.pdf (kein Redirect — sonst Schleife auf derselben Domain). */
const satzungPdfPath = "/CAM_satzung.pdf";

export const site = {
  // Adressen ausserhalb dieser Seite. Stand der Angaben: pepe-dome.de.
  extern: {
    pepeDome: { label: "pepe-dome.de", href: "https://www.pepe-dome.de" },
    social: [
      { label: "Instagram", href: "https://www.instagram.com/pepe.dome/" },
      { label: "Facebook", href: "https://www.facebook.com/pepedome" },
      { label: "YouTube", href: "https://www.youtube.com/@pepedome" },
    ],
  },
  // Fakten zum Ort. Quelle: docs/dome/FAKTEN.md (Stand pepe-dome.de, 17.11.2026).
  // Nur von dort übernehmen. Gemeinnützigkeit, Platzzahl und Ortsname: erst Abschnitt 11 lesen.
  dome: {
    fakten: [
      { label: "Ort", wert: "Theatron im Ostpark, München-Neuperlach" },
      { label: "Eröffnung", wert: "1. August 2025" },
      { label: "Bauform", wert: "Geodätische Kuppel, 22 Meter Durchmesser, 8,5 Meter hoch" },
      { label: "Plätze", wert: "170 Sitzplätze" },
      { label: "Zugang", wert: "Barrierearm, Begleitperson empfohlen" },
      { label: "Anreise", wert: "U5 bis Quiddestraße, Parken am Michaelibad" },
    ],
    entstehung: {
      ueberschrift: "Wie der Dome entstand",
      // Wortlaut von pepe-dome.de, Über uns
      text: "2006 begann die Suche nach einem Raum für zeitgenössischen Zirkus. Über mehrere temporäre Standorte (MUCCA, CircusHub, Sugar Mountain) entwickelte sich das Projekt bis zur offiziellen Eröffnung am 1. August 2025 im Ostpark München.",
      bildunterschrift: "Aufbau der Kuppel im Theatron im Ostpark",
      bilder: [
        domeBilder.aufbauTragwerkKran,
        domeBilder.aufbauGeruestWolken,
        domeBilder.aufbauKuppelhaut,
        domeBilder.aufbauHolzknoten,
      ],
    },
  },
  verein: {
    name: "Circus Akademie München e.V.",
    rolle: "Der Circus Akademie München e.V. betreibt seit 2026 den Pepe Dome im Münchner Ostpark.",
    rechtsform: "Eingetragener Verein (e.V.)",
    register: "Amtsgericht München, VR 208483",
    ansprechpersonen: ["Christoph Hermann", "Michael Heiduk"],
    telefon: { anzeige: "+49 179 699 0707", href: "tel:+491796990707" },
    kurzbeschreibung: "Zeitgenössischer Zirkus als Kunstform – Training, Bühne, Wissenstransfer und Community in München.",
    mission: "Wir stärken den zeitgenössischen Zirkus in München: durch Räume, Formate und Zusammenarbeit, die künstlerische Entwicklung und kulturelle Teilhabe möglich machen.",
    wofuerWirStehen: {
      headline: "Wofür wir stehen",
      text1: "Der Circus Akademie München e.V. setzt sich für die Förderung von Kunst und Kultur ein – mit Fokus auf zeitgenössischen Zirkus. Wir verstehen Zirkus als Brücke zwischen darstellender und bildender Kunst: Körper, Musik, Raum, Bild und Story treffen aufeinander.",
      text2: "Unser Ziel ist eine verlässliche Struktur, in der Training, Wissenstransfer und öffentliche Formate dauerhaft möglich werden. Wir arbeiten gemeinschaftlich, sorgfältig und offen für Kooperationen – damit künstlerische Entwicklung und kulturelle Teilhabe in München wachsen können.",
      workplace: {
        headline: "Unser Ort",
        text1: "Im Geodome München schaffen wir Raum für zeitgenössischen Zirkus. Hier finden Training, Proben, Workshops und Aufführungen statt – ein fester Ort für eine lebendige Kunstform.",
        text2: "Wir arbeiten daran, dass dieser Ort dauerhaft bestehen bleibt und zu einem sichtbaren Teil der Münchner Kulturlandschaft wird.",
      },
    },
    details: {
      sitz: "München",
      geschaeftsjahr: "Kalenderjahr",
      selbstverstaendnis: "Der Verein versteht den Circus als besondere Kunstform und fördert Formen des Zirkus auch jenseits des etablierten fahrenden Circus und Varietés – u. a. durch neue Räume und Veranstaltungsformen.",
      vereinszweck: {
        zweck: "Zweck des Vereins ist die Förderung von Kunst und Kultur, insbesondere des zeitgenössischen Zirkus.",
        mittelverwendung: [
          "Der Verein verfolgt in erster Linie seinen satzungsmäßigen Zweck, nicht eigenwirtschaftliche Interessen.",
          "Mittel werden nur für satzungsmäßige Zwecke verwendet.",
          "Keine Zuwendungen ohne Gegenleistung; keine Begünstigung durch zweckfremde Ausgaben oder unverhältnismäßige Vergütungen.",
        ],
      },
    },
  },
  home: {
    einstieg: {
      headline: "Zirkus neu erleben – Kunst, die Menschen verbindet.",
      cta1: { text: "Über uns", href: "/ueber-uns" },
      cta2: { text: "Mitglied werden", href: "/mitglieder-werden" },
    },
    programm: {
      text: "Programm und Termine stehen auf der Seite des Pepe Dome.",
    },
    formateUeberschrift: "Unsere Formate",
    zielgruppenUeberschrift: "So finanzieren wir uns",
    zielgruppen: [
      {
        title: "Unterstützen",
        text: "Machen Sie Kunst möglich – werden Sie Mitglied oder unterstützen Sie uns als Privatperson.",
        link: "/mitglieder-werden",
      },
      {
        title: "Unternehmen",
        text: "Sichtbar fördern: Kultur, die in München Wirkung zeigt – mit fairen Sponsoring-Paketen.",
        link: "/unterstuetzen/sponsoring",
      },
      {
        title: "Kommune / Förderung",
        text: "Zeitgenössischer Zirkus als Kultur- und Begegnungsraum – wir zeigen Nutzen, Plan und Zahlen.",
        link: "/foerderung",
      },
    ],
    formate: [
      {
        title: "Training",
        label: "Kontinuität",
        description: "Regelmäßige Trainings- und Probenmöglichkeiten als Basis für Kontinuität.",
        image: { src: "/images/disziplinen/breakdance.webp", width: 800, height: 533, alt: "Ein Breakdancer stützt sich auf einem Betonboden auf eine Hand, die Beine sind weit in die Luft gespreizt" },
      },
      {
        title: "Produktion",
        label: "Projekte",
        description: "Ressourcen, Austausch und Sichtbarkeit für performative Projekte.",
        image: { src: "/images/critical-spaces.webp", width: 1680, height: 1680, alt: "Drei Tänzerinnen und Tänzer halten sich in einer dunklen Halle gegenseitig im Gleichgewicht, darüber der Schriftzug Critical Spaces", fokus: "50% 80%" },
      },
      {
        title: "Open Stage",
        label: "Experimentieren",
        description: "Ein Raum zum Experimentieren: interdisziplinär, niedrigschwellig, publikumsnah.",
        image: { ...domeBilder.jonglageKeulen, fokus: "50% 30%" },
      },
      {
        title: "Show",
        label: "Aufführung",
        description: "Aufführungen und Präsentationen: Zeitgenössischer Zirkus auf der Bühne, für Publikum sichtbar gemacht.",
        image: domeBilder.schlussapplaus,
      },
      {
        title: "Workshops",
        label: "Weiterbildung",
        description: "Weiterbildung mit Gästen und lokalen Expert:innen – von Technik bis Kreation.",
        image: { src: "/images/disziplinen/partnerakrobatik.webp", width: 1620, height: 1080, alt: "Ein Artist im Spagat am Boden hält mit einem Arm seine Partnerin, die sich waagerecht über ihm streckt" },
      },
    ],
    storytelling: {
      ueberschrift: "Unter der Kuppel passiert was.",
      text: "Im Geodome wird aus 'Ich trau mich nicht' ein 'Schau mal!'. Zeitgenössischer Zirkus verbindet Körper, Musik, Theater und Mut – und bringt Menschen zusammen, die sich sonst nie begegnet wären. Wir schaffen Raum für Training, Experimente und Aufführungen. Damit dieser Ort bleibt, brauchen wir Unterstützung.",
    },
    finanzziel: {
      ueberschrift: "Umbau & Upgrade am Geodome",
      gesamt: "ca. 105.000 €",
      gruppen: [
        {
          titel: "Basisinvestitionen (ca. 35.000 €)",
          summe: "ca. 35.000 €",
          karten: [
            {
              title: "Toilettenanlage",
              beschreibung: "Sanierung und Ausbau der WC-Anlage für Gäste und Betrieb.",
            },
            {
              title: "Feuerfeste Türen (Brandschutz)",
              beschreibung: "Brandschutzmaßnahmen für einen sicheren und regelkonformen Veranstaltungsbetrieb.",
            },
            {
              title: "Technikpodium",
              beschreibung: "Podium für Licht- und Tontechnik – belastbar, anbindbar, bühnentauglich.",
            },
          ],
        },
        {
          titel: "Weitere technische Anlagen & Ausbau (ca. 70.000 €)",
          summe: "ca. 70.000 €",
          karten: [
            {
              title: "Technische Anlagen",
              beschreibung: "Ergänzende technische Infrastruktur für Produktion und Veranstaltungsbetrieb.",
            },
            {
              title: "Musik & Licht",
              beschreibung: "Upgrades für Regie, Ton- und Lichttechnik – für bessere Show-Qualität im Alltag.",
            },
            {
              title: "Verdunkelung",
              beschreibung: "Lösungen zur Lichtsteuerung und Verdunkelung für flexible Formate.",
            },
            {
              title: "Infrastruktur (inkl. Backstage/Bar)",
              beschreibung: "Flächen und Ausstattung für Team/Rückzug sowie einfache Bar-/Servicezone.",
            },
          ],
        },
      ],
    },
    abschlussCta: {
      ueberschrift: "Machen Sie den Dome möglich.",
      cta1: {
        text: "Sponsoring anfragen",
        href: "/unterstuetzen/sponsoring",
      },
      cta2: {
        text: "Unterstützen",
        href: "/unterstuetzen",
      },
    },
  },
  unterstuetzen: {
    headline: "So können Sie helfen",
    intro: "Ihre Unterstützung ermöglicht zeitgenössischen Zirkus in München. Wir schaffen Räume für künstlerische Entwicklung und bereichern die Münchner Kulturlandschaft.",
    vorteileUeberschrift: "Vorteile:",
    wege: [
      {
        title: "Unterstützer:innen",
        text: "Unterstützen Sie uns als Privatperson – z.B. durch Mitgliedschaft oder ideelle Unterstützung. Gemeinsam stärken wir zeitgenössischen Zirkus in München.",
        vorteile: [
          "Direkte Förderung der Münchner Kulturlandschaft",
          "Unterstützung lokaler Künstler:innen",
          "Mitgliedschaft oder ideelle Unterstützung",
        ],
        cta: { text: "Mitglied werden", href: "/mitglieder-werden" },
      },
      {
        title: "Unternehmen",
        text: "Als Sponsor unterstützen Sie zeitgenössischen Zirkus und erhalten gleichzeitig wertvolle Sichtbarkeit für Ihr Unternehmen oder Ihre Organisation.",
        vorteile: [
          "Sichtbarkeit bei Veranstaltungen und auf unserer Website",
          "Assoziation mit innovativer, kultureller Arbeit",
          "Zielgruppenansprache: Kulturinteressierte, Künstler:innen, Familien",
          "CSR-Engagement mit nachhaltiger Wirkung",
        ],
        cta: { text: "Mehr erfahren", href: "/unterstuetzen/sponsoring" },
      },
      {
        title: "Politik & Kommune",
        text: "Förderung von Kultur und kultureller Teilhabe. Wir arbeiten an nachhaltigen Strukturen für zeitgenössischen Zirkus in München.",
        vorteile: [
          "Kulturelle Teilhabe fördern",
          "Nachhaltige Strukturen",
          "Kulturelle und soziale Wirkung",
          "Beitrag zur Münchner Kulturlandschaft",
        ],
        cta: { text: "Mehr erfahren", href: "/foerderung" },
      },
    ],
  },
  mitglieder: {
    intro: "Mitgliedschaft erfolgt per schriftlichem Antrag und Annahme durch den Vorstand.",
    success: "Ihr Antrag ist eingegangen. Der Vorstand meldet sich per E-Mail.",
  },
  kontakt: {
    intro: "Schreiben Sie uns – wir melden uns zeitnah zurück.",
    fields: {
      name: "Name",
      email: "E-Mail",
      nachricht: "Nachricht",
      datenschutz: "Ich habe die Datenschutzhinweise gelesen.",
    },
    success: "Danke! Ihre Nachricht ist bei uns angekommen.",
    merkmale: [
      "Engagierter Kulturverein",
      "Zeitnahe Antwort",
      "Transparente Kommunikation",
      "Persönlicher Kontakt",
    ],
  },
  satzung: {
    download: satzungPdfPath,
    text: "Satzung (PDF)",
  },
  // Kopf: vier Einstiege, "Mitglied werden" ist der Button rechts.
  // auch: Unterseiten, bei denen der Eintrag ebenfalls als aktiv gilt.
  navigation: [
    { label: "Start", href: "/", auch: [] },
    { label: "Über uns", href: "/ueber-uns", auch: [] },
    { label: "Fördern", href: "/unterstuetzen", auch: ["/foerderung"] },
    { label: "Kontakt", href: "/kontakt", auch: [] },
  ],
  navigationButton: { label: "Mitglied werden", href: "/mitglieder-werden" },
  footer: {
    navigation: [
      { label: "Start", href: "/" },
      { label: "Über uns", href: "/ueber-uns" },
      { label: "Mitglied werden", href: "/mitglieder-werden" },
      { label: "Fördern", href: "/unterstuetzen" },
      { label: "Sponsoring", href: "/unterstuetzen/sponsoring" },
      { label: "Förderung", href: "/foerderung" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    adresse: ["Pepe Dome im Theatron im Ostpark", "81735 München"],
    // Wortlaut von pepe-dome.de
    foerderhinweis: "Der Pepe Dome wird vom Kulturreferat der Landeshauptstadt München und von Kreativ München gefördert sowie durch Städtebauförderungsmittel von Bund, Freistaat Bayern und Landeshauptstadt München.",
    trustLine: "Circus Akademie München e.V. – Förderung von zeitgenössischem Zirkus in München und Bayern.",
  },
  sponsoring: {
    hero: {
      headline: "Sponsoring, das wirkt – und sichtbar ist.",
      lead: "Unterstützen Sie einen festen Kulturort für zeitgenössischen Zirkus im Geodome München. Gemeinsam ermöglichen wir Programm, Infrastruktur und faire Organisation.",
      cta1: {
        text: "Sponsoring anfragen",
        href: "#kontakt",
      },
      cta2: {
        text: "Projekt & Zahlen",
        href: "/foerderung",
      },
    },
    warum: [
      "Lokale Sichtbarkeit in München – am festen Veranstaltungsort Geodome",
      "Kulturförderung mit gesellschaftlichem Mehrwert: Menschen verbinden, neue Formate ermöglichen",
      "Glaubwürdig & transparent: Umbau & Upgrade (ca. 105.000 €)",
    ],
    pakete: [
      {
        name: "Bronze",
        betrag: "ab 2.500 €/Jahr",
        beschreibung: "Ideal für Unternehmen, die zeitgenössischen Zirkus unterstützen möchten.",
        inhalt: [
          "Logo im Bereich für Unterstützer:innen vor Ort im Dome",
          "Erwähnung in ausgewählten Social Posts",
          "2 Freikarten pro Veranstaltung (nach Verfügbarkeit)",
        ],
      },
      {
        name: "Silber",
        betrag: "ab 7.500 €/Jahr",
        beschreibung: "Perfekt für Unternehmen, die mehr Sichtbarkeit und Engagement suchen.",
        inhalt: [
          "Alles aus Bronze",
          "Logo vor Ort im Geodome (je nach Format)",
          "Erwähnung bei Veranstaltungen (Moderation/Programmheft, wenn vorhanden)",
          "6 Freikarten pro Veranstaltung (nach Verfügbarkeit)",
        ],
      },
      {
        name: "Gold",
        betrag: "ab 15.000 €/Jahr",
        beschreibung: "Für große Organisationen mit umfassendem Engagement.",
        inhalt: [
          "Alles aus Silber",
          "Co-Branding eines Formats (z.B. Workshop-Tag / Show-Abend)",
          "Exklusiver Team-Workshop (Zirkus/Bewegung als Teamevent)",
          "10 Freikarten pro Veranstaltung (nach Verfügbarkeit)",
        ],
      },
    ],
    paketeHinweis: "Sie möchten gezielt Toiletten, Brandschutz, Technikpodium oder Backstage fördern? Wir schnüren gern ein passendes Paket.",
    kontakt: {
      text: "Kurze Nachricht reicht – wir melden uns mit einem konkreten Vorschlag.",
      success: "Danke! Wir melden uns kurzfristig.",
    },
  },
  foerderung: {
    hero: {
      headline: "Zeitgenössischer Zirkus als Kultur- und Begegnungsraum für München.",
      lead: "Wir sind ein Kulturverein mit festem Veranstaltungsort im Geodome. Unser Ziel: Kunst ermöglichen, Menschen verbinden, neue Kulturformate sichtbar machen – derzeit mit Fokus auf Umbau und Upgrade vor Ort.",
      cta: {
        text: "Gespräch vereinbaren",
        href: "#kontakt",
      },
    },
    mehrwert: [
      "Kulturelle Teilhabe: niedrigschwelliger Zugang zu zeitgenössischer Kunst",
      "Nachwuchs & Talentförderung: Trainings-, Proben- und Auftrittsmöglichkeiten",
      "Stadtgesellschaft & Begegnung: Formate, die Menschen zusammenbringen",
      "Kulturelle Innovation: neue Kunstformate jenseits klassischer Bühnen",
      "Standortfaktor München: ein sichtbarer, fester Kulturort im Geodome",
    ],
    finanzplan: {
      ueberschrift: "Umbau & Upgrade: ca. 105.000 €",
      gesamt: "ca. 105.000 €",
      rubriken: [
        {
          titel: "Basisinvestitionen (ca. 35.000 €)",
          summe: "ca. 35.000 €",
          items: [
            {
              kategorie: "Toilettenanlage",
              beschreibung: "Sanierung und Ausbau der WC-Anlage für Gäste und Betrieb.",
            },
            {
              kategorie: "Feuerfeste Türen (Brandschutz)",
              beschreibung: "Brandschutzmaßnahmen für einen sicheren und regelkonformen Veranstaltungsbetrieb.",
            },
            {
              kategorie: "Technikpodium",
              beschreibung: "Podium für Licht- und Tontechnik – belastbar, anbindbar, bühnentauglich.",
            },
          ],
        },
        {
          titel: "Technische Anlagen & Ausbau (ca. 70.000 €)",
          summe: "ca. 70.000 €",
          items: [
            {
              kategorie: "Technische Anlagen",
              beschreibung: "Ergänzende technische Infrastruktur für Produktion und Veranstaltungsbetrieb.",
            },
            {
              kategorie: "Musik & Licht",
              beschreibung: "Upgrades für Regie, Ton- und Lichttechnik – für bessere Show-Qualität im Alltag.",
            },
            {
              kategorie: "Verdunkelung",
              beschreibung: "Lösungen zur Lichtsteuerung und Verdunkelung für flexible Formate.",
            },
            {
              kategorie: "Infrastruktur (inkl. Backstage/Bar)",
              beschreibung: "Flächen und Ausstattung für Team/Rückzug sowie einfache Bar-/Servicezone.",
            },
          ],
        },
      ],
      zusatztext:
        "Wir möchten diese Investition möglichst über Sponsoring, Förderung und Spenden decken. Detailkosten klären wir mit Planung und Handwerk.",
    },
    einsatz: [
      {
        kategorie: "Toilettenanlage",
        beschreibung: "Gäste- und Personal-WC: funktional, hygienisch, wartbar.",
      },
      {
        kategorie: "Feuerfeste Türen",
        beschreibung: "Abschottung und sichere Fluchtwege im Veranstaltungsbetrieb.",
      },
      {
        kategorie: "Technikpodium",
        beschreibung: "Technikbühne für Regie, Kabelwege und Aufbau – ohne Improvisation auf der Spielstätte.",
      },
      {
        kategorie: "Backstage / Bar",
        beschreibung: "Rückzug für Artist:innen und Team; einfache Bar für Veranstaltungen und Publikum.",
      },
    ],
    unterlagen: [
      {
        titel: "Vereinssatzung (PDF)",
        link: satzungPdfPath,
      },
    ],
    kontakt: {
      text: "Wir freuen uns über ein kurzes Gespräch zur kulturellen Einordnung, Zielsetzung und Förderlogik.",
    },
  },
  // credit bleibt leer, bis die Namen der Fotograf:innen vorliegen. Erfunden wird nichts.
  disziplinen: [
    {
      name: "Ein Mann, Ein Koffer, Ein Wandazirkus",
      kategorie: "Performance",
      image: "/images/disziplinen/ein-mann-ein-koffer.webp",
      width: 2400,
      height: 1600,
      alt: "Ein Straßenkünstler in rot gemustertem Hemd stemmt sich mit verzerrtem Gesicht gegen einen schwarzen Koffer, im Vordergrund die Köpfe des Publikums",
      credit: undefined as string | undefined,
    },
    {
      name: "Clownerie",
      kategorie: "Performance",
      image: "/images/disziplinen/clownerie.webp",
      width: 1600,
      height: 2400,
      alt: "Ein Clown mit Schiebermütze, Fliege und großen roten Schuhen steht auf einem Spielplatz und schaut zur Seite",
      credit: undefined as string | undefined,
    },
    {
      name: "Breakdance",
      kategorie: "Tanz",
      image: "/images/disziplinen/breakdance.webp",
      width: 800,
      height: 533,
      alt: "Ein Breakdancer stützt sich auf einem Betonboden auf eine Hand, die Beine sind weit in die Luft gespreizt",
      credit: undefined as string | undefined,
    },
    {
      name: "Contemporary Dance",
      kategorie: "Tanz",
      image: "/images/disziplinen/contemporary-dance.webp",
      width: 1620,
      height: 1080,
      alt: "Eine Tänzerin im weißen Hemd springt vor schwarzem Hintergrund und streckt ein Bein hoch nach vorn",
      credit: undefined as string | undefined,
    },
    {
      name: "Pantomime",
      kategorie: "Performance",
      image: "/images/disziplinen/pantomime.webp",
      width: 2400,
      height: 1600,
      alt: "Ein Pantomime mit Hut und Frack macht einen großen Schritt und trägt einen alten Koffer über eine dunkle Bühne",
      credit: undefined as string | undefined,
    },
    {
      name: "Feuerwehr Akrobatik",
      kategorie: "Artistik",
      image: "/images/disziplinen/feuerwehr-akrobatik.webp",
      width: 1840,
      height: 1840,
      alt: "Zwei Menschen in orangefarbenen Overalls zeigen eine Hebefigur auf dem Dach eines roten Feuerwehrautos mit ausgefahrener Leiter",
      credit: undefined as string | undefined,
    },
    {
      name: "Canes",
      kategorie: "Artistik",
      image: "/images/disziplinen/canes.webp",
      width: 1620,
      height: 1080,
      alt: "Eine Artistin im Glitzerkostüm steht auf einem Arm im Handstand auf Stäben über einer gelben Kiste",
      credit: undefined as string | undefined,
    },
    {
      name: "Contortion",
      kategorie: "Artistik",
      image: "/images/disziplinen/contortion.webp",
      width: 1620,
      height: 1080,
      alt: "Aus einer kleinen gelben Holzkiste ragen zwei Beine heraus, der restliche Körper steckt in der Kiste",
      credit: undefined as string | undefined,
    },
    {
      name: "Drag",
      kategorie: "Performance",
      image: "/images/disziplinen/drag.webp",
      width: 1600,
      height: 2400,
      alt: "Eine Person in High Heels hängt kopfüber an einem Tuch hoch über einem Bahngelände, dahinter der Himmel bei Sonnenuntergang",
      credit: undefined as string | undefined,
    },
    {
      name: "Aerial Silk",
      kategorie: "Artistik",
      image: "/images/disziplinen/aerial-silk.webp",
      width: 1600,
      height: 2400,
      alt: "Eine Person hängt im Spagat zwischen zwei Tüchern, dahinter Bahngleise und Abendhimmel",
      credit: undefined as string | undefined,
    },
    {
      name: "Cyr Wheel",
      kategorie: "Artistik",
      image: "/images/disziplinen/cyr-wheel.webp",
      width: 1620,
      height: 1080,
      alt: "Ein Artist schwebt waagerecht in einem Cyr Wheel, um ihn herum zieht Bühnennebel",
      credit: undefined as string | undefined,
    },
    {
      name: "Partnerakrobatik",
      kategorie: "Artistik",
      image: "/images/disziplinen/partnerakrobatik.webp",
      width: 1620,
      height: 1080,
      alt: "Ein Artist im Spagat am Boden hält mit einem Arm seine Partnerin, die sich waagerecht über ihm streckt",
      credit: undefined as string | undefined,
    },
    {
      name: "Handstand",
      kategorie: "Artistik",
      image: "/images/disziplinen/handstand.webp",
      width: 1620,
      height: 1080,
      alt: "Zwei Menschen in orange-schwarz-weiß gestreiften Kostümen stehen jeweils auf einer Hand, die Beine zur Seite gestreckt",
      credit: undefined as string | undefined,
    },
    {
      name: "Magic",
      kategorie: "Performance",
      image: "/images/disziplinen/magic.webp",
      width: 1916,
      height: 1074,
      alt: "Ein lächelnder Mann im hellblauen Hemd hält die geschlossene Faust vor, eine zweite Person streckt die Hand danach aus",
      credit: undefined as string | undefined,
    },
  ],
} as const;
