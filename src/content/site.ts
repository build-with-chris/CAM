/** Satzung als statische Datei unter public/CAM_satzung.pdf (kein Redirect — sonst Schleife auf derselben Domain). */
const satzungPdfPath = "/CAM_satzung.pdf";

export const site = {
  verein: {
    name: "Circus Akademie München e.V.",
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
    intro: {
      title: "Circus Akademie München e.V.",
      text: "Circus Akademie München e.V. ist ein eingetragener Verein mit Sitz in München. Zweck des Vereins ist die Förderung von Kunst und Kultur, insbesondere des zeitgenössischen Zirkus.",
      teaser: [
        "Circus als Brückenschlag zwischen darstellender und bildender Kunst",
        "Raum für neue Formate, neue Räume und Zusammenarbeit mit lokalen & internationalen Künstlern",
        "Beitrag zur Münchner Kulturlandschaft",
      ],
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
  hero: {
    headline: "Zirkus neu erleben – Kunst, die Menschen verbindet.",
    subline: "Die Zirkus Akademie München ist ein Kulturverein für zeitgenössischen Zirkus – mit festem Zuhause im Geodome München.",
    bedarf: "Für Umbau und Upgrade am Geodome benötigen wir derzeit rund 105.000 € gesamt: Basisinvestitionen (ca. 35.000 €) und zusätzliche Technik & Ausbau (ca. 70.000 €).",
    cta1: {
      text: "Sponsoring anfragen",
      href: "/unterstuetzen/sponsoring",
    },
    cta2: {
      text: "Unterstützen",
      href: "/unterstuetzen",
    },
    hinweis: "Ort 2025: Pepe Dome (Geodom am Ostpark)",
  },
  home: {
    zielgruppen: [
      {
        title: "Unterstützen",
        text: "Mach Kunst möglich – werde Mitglied oder unterstütze uns als Privatperson.",
        link: "/unterstuetzen",
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
    warumWir: [
      "Satzungsgemäße Förderung von zeitgenössischem Zirkus",
      "Fester Veranstaltungsort: Geodome in München",
      "Ziel: Kunst ermöglichen, Menschen verbinden, neue Kulturformate sichtbar machen",
      "Transparentes Umbauvorhaben mit konkretem Finanzrahmen",
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
      ueberschrift: "Mach den Dome möglich.",
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
  spenden: {
    hero: {
      headline: "Spenden, die Zirkus möglich machen.",
      lead: "Wir investieren in Umbau und Upgrade am Geodome München: Basisinvestitionen (ca. 35.000 €) und zusätzliche Technik & Ausbau (ca. 70.000 €). Deine Spende trägt zu diesem Gesamtvorhaben (ca. 105.000 €) bei.",
      cta: {
        text: "Jetzt spenden",
        href: "#spenden-optionen",
      },
    },
    unterstuetzung: {
      titel: "Wofür wir Unterstützung brauchen",
      items: [
        "Basisinvestitionen (ca. 35.000 €): Toilettenanlage, feuerfeste Türen (Brandschutz), Technikpodium",
        "Weitere technische Anlagen & Ausbau (ca. 70.000 €): technische Anlagen, Musik & Licht, Verdunkelung, Infrastruktur (inkl. Backstage/Bar)",
        "Gesamtrahmen des Umbauvorhabens: ca. 105.000 €",
      ],
    },
    donationTiers: [
      {
        betrag: "25 €",
        wirkung: "Material für Training & Workshops (z.B. Bälle, Tape, Kleinteile)",
      },
      {
        betrag: "50 €",
        wirkung: "Ein Anteil an Proben- und Workshop-Betrieb im Geodome",
      },
      {
        betrag: "150 €",
        wirkung: "Beitrag zu Brandschutz und sicherer Ausstattung (z. B. Tür- und Schließbereich)",
      },
      {
        betrag: "500 €",
        wirkung: "Merkbare Unterstützung für Technikpodium oder Backstage-Ausbau",
      },
      {
        betrag: "1.000 €",
        wirkung: "Spürbarer Anteil am Umbau – z. B. Flächen oder Technikanschlüsse",
      },
      {
        betrag: "2.500 €",
        wirkung: "Starker Schub für einen größeren Bauabschnitt (Sanitär, Türen oder Barbereich)",
      },
    ],
    hinweis: "Jeder Betrag hilft – wir setzen Spenden dort ein, wo sie aktuell am dringendsten gebraucht werden.",
    trust: {
      text: "Wir verwenden Spenden satzungsgemäß für die Förderung von zeitgenössischem Zirkus und – im Rahmen dieses Aufrufs – für das beschriebene Umbauvorhaben. Ein Nachweis zur steuerlichen Anerkennung von Spenden ist voraussichtlich erst möglich, wenn das Finanzamt die Gemeinnützigkeit bestätigt hat; bis dahin stellen wir keine entsprechenden Bescheinigungen aus.",
    },
    faq: [
      {
        question: "Wofür wird meine Spende verwendet?",
        answer: "Für das Umbau- und Upgrade-Vorhaben am Geodome: Basisinvestitionen (ca. 35.000 €) für Toilettenanlage, Brandschutz und Technikpodium sowie zusätzliche Technik & Ausbau (ca. 70.000 €) für technische Anlagen, Musik & Licht, Verdunkelung und Infrastruktur (inkl. Backstage/Bar). Gesamt: ca. 105.000 €.",
      },
      {
        question: "Kann ich regelmäßig spenden?",
        answer: "Ja – regelmäßige Spenden helfen uns besonders bei der Planung. (Platzhalter: Kontakt oder späteres Formular/Widget)",
      },
      {
        question: "Ist meine Spende steuerlich absetzbar?",
        answer: "Eine Spendenbescheinigung für die Steuer ist erst sinnvoll, wenn uns die Gemeinnützigkeit vom Finanzamt bestätigt wurde – das erwarten wir in den kommenden Wochen. Bis dahin kannst du spenden, aber ohne steuerlichen Nachweis von unserer Seite. Bei Rückfragen melde dich gern.",
      },
      {
        question: "Ich möchte zweckgebunden spenden – geht das?",
        answer: "Schreib uns kurz, wofür du spenden möchtest (z. B. Sanitär, Brandschutz, Technik, Backstage). Wenn es zu unserer Satzung passt, berücksichtigen wir das.",
      },
    ],
    abschluss: {
      ueberschrift: "Gemeinsam halten wir den Dome am Leuchten.",
      cta1: {
        text: "Jetzt spenden",
        href: "#spenden-optionen",
      },
      cta2: {
        text: "Fragen? Kontakt",
        href: "/kontakt",
      },
    },
  },
  zweck: {
    kicker: "Wofür wir stehen",
    text: "Der Circus Akademie München e.V. setzt sich für die Förderung von Kunst und Kultur ein – mit Fokus auf zeitgenössischen Zirkus. Wir verstehen Zirkus als Brücke zwischen darstellender und bildender Kunst: Körper, Musik, Raum, Bild und Story treffen aufeinander. Unser Ziel ist eine verlässliche Struktur, in der Training, Wissenstransfer und öffentliche Formate dauerhaft möglich werden. Wir arbeiten gemeinschaftlich, sorgfältig und offen für Kooperationen – damit künstlerische Entwicklung und kulturelle Teilhabe in München wachsen können.",
    werte: ["Qualität", "Sicherheit", "Offenheit", "Zusammenarbeit"],
  },
  angebote: [
    {
      id: "open-stage",
      title: "Open Stage",
      teaser: "Ein Raum zum Experimentieren: interdisziplinär, niedrigschwellig, publikumsnah.",
      details: "Unsere Open Stages schaffen Sichtbarkeit und Austausch. Artistik trifft Musik, Performance trifft Bild, Recherche trifft Publikum. Wer Neues ausprobiert, braucht einen Rahmen – wir bauen ihn gemeinsam.",
      bullets: ["Testen & Feedback", "Vernetzung", "Dokumentation/Material nach Möglichkeit"],
      image: "/placeholders/program-1.svg",
      volltext: "Open-Stage-Format: Raum zum Experimentieren, mit möglichst interdisziplinärer Vernetzung (Artistik, Musik, bildende & darstellende Kunst).",
      cta: "Du möchtest dich bei einer Open Stage beteiligen?",
      ctaLink: "/kontakt?subject=Open%20Stage",
    },
    {
      id: "training",
      title: "Training",
      teaser: "Regelmäßige Trainings- und Probenmöglichkeiten als Basis für Kontinuität.",
      details: "Kontinuität ist im Zirkus alles. Wir arbeiten daran, Trainingsfenster, Probenzeiten und Austausch so zu organisieren, dass Entwicklung planbarer wird – für unterschiedliche Level und Disziplinen.",
      bullets: ["Struktur & Routine", "Sicherer Rahmen", "Community-Training"],
      image: "/placeholders/program-2.svg",
      volltext: "Workshops & Training / Bildungsangebote: Entwicklung künstlerischer Fähigkeiten fördern.",
      cta: "Du suchst regelmäßige Trainingsmöglichkeiten?",
      ctaLink: "/kontakt?subject=Training",
    },
    {
      id: "workshops",
      title: "Workshops",
      teaser: "Weiterbildung mit Gästen und lokalen Expert*innen – von Technik bis Kreation.",
      details: "Workshops bringen neue Impulse nach München. Von Grundlagen bis Spezialthemen: Technik, Körperarbeit, Kreation, Bühnenpraxis. Inhalte und Formate entwickeln wir bedarfsorientiert.",
      bullets: ["Skill-Boost", "Input von außen", "Gemeinsames Lernen"],
      image: "/placeholders/program-3.svg",
      volltext: "Workshops & Training / Bildungsangebote: Entwicklung künstlerischer Fähigkeiten fördern.",
      cta: "Du interessierst dich für einen Workshop?",
      ctaLink: "/kontakt?subject=Workshop",
    },
    {
      id: "produktionen",
      title: "Produktionen",
      teaser: "Ressourcen, Austausch und Sichtbarkeit für performative Projekte.",
      details: "Wir unterstützen Projekte ideell und organisatorisch – durch Raum, Netzwerk, Sparring und Öffentlichkeit, wenn es passt. Ziel: mehr zeitgenössischer Zirkus auf Münchner Bühnen und in neuen Räumen.",
      bullets: ["Netzwerk & Kooperation", "Strukturhilfe", "Bühnenmomente"],
      image: "/placeholders/program-4.svg",
      volltext: "Förderung performativer Projekte: finanziell oder ideell, besonders im zeitgenössischen Circus. Aufführungen organisieren & durchführen: Präsentationsmöglichkeiten für Zirkus-Künstler und Bekanntmachung des zeitgenössischen Circus. Information & Austausch: Informationen verbreiten, Fachtagungen und fachlicher Austausch.",
      cta: "Du hast ein Projekt, das Unterstützung braucht?",
      ctaLink: "/kontakt?subject=Produktion",
    },
  ],
  ort: {
    kicker: "Unser Ort",
    headline: "Pepe Dome (Geodom am Ostpark)",
    text: "Seit 2025 haben wir mit dem Pepe Dome eine feste Basis in München. Hier können Trainings, Proben, Workshops und kleine Formate verlässlicher stattfinden. Der Raum ist unser Anker – und gleichzeitig ein Startpunkt für Kooperationen in der Stadt.",
    fakten: [
      "München – Ostpark",
      "Nutzung für Training/Proben/Workshops",
      "Formate nach Absprache",
      "Kooperationen willkommen",
      "Platz für Community & Austausch",
    ],
    mapImage: "/placeholders/map.svg",
    trainingszeiten: {
      profis: "Mo-Fr 11:00-14:00",
      beschreibung: "Aktuelle Trainingszeiten im Geodome für Profis",
    },
  },
  aktuelles: [
    {
      date: "2026-01-18",
      title: "Open Stage: Winter Edition",
      description: "Kurze Nummern, neue Ideen, offenes Feedback. Details folgen.",
    },
    {
      date: "2026-02-08",
      title: "Workshop-Wochenende",
      description: "Thema und Dozent*in werden zeitnah veröffentlicht.",
    },
    {
      date: "2026-03-15",
      title: "Community-Training Slot",
      description: "Gemeinsam trainieren, austauschen, dranbleiben.",
    },
  ],
  mitmachen: [
    {
      id: "mitglied",
      title: "Mitglied werden",
      text: "Werde Teil des Vereins und gestalte Struktur, Angebote und Formate mit.",
      cta: "Mitglied anfragen",
      subject: "Mitgliedschaft",
      details: {
        wer: "Jede natürliche Person sowie juristische Person, die die Zwecke des Vereins aktiv oder ideell unterstützt. Über den schriftlichen Aufnahmeantrag entscheidet der Vorstand.",
        arten: [
          "Aktive Mitglieder: mit Stimmrecht in der Mitgliederversammlung",
          "Fördermitglieder: ohne Stimmrecht",
        ],
        beitrag: "Der Mitgliedsbeitrag beträgt 35€ pro Jahr. Die Fälligkeit beschließt die Mitgliederversammlung. Es gilt die jeweils gültige Beitragsordnung.",
        austritt: "Austritt: schriftlich, bis 3 Monate vor Jahresende. Ausschluss: bei wichtigem Grund (z. B. grober Verstoß, Zahlungsrückstand); Entscheidung durch Vorstand, vorherige Anhörung möglich.",
      },
    },
    {
      id: "unterstuetzen",
      title: "Unterstützen",
      text: "Du willst fördern oder Ressourcen teilen? Jede Unterstützung stärkt Kultur vor Ort.",
      cta: "Unterstützung anbieten",
      subject: "Unterstützen",
      details: {
        wertversprechen: "Ihre Unterstützung ermöglicht zeitgenössischen Zirkus in München: Wir schaffen Räume für künstlerische Entwicklung, fördern lokale Talente und bereichern die Münchner Kulturlandschaft nachhaltig.",
        spenden: {
          titel: "Spenden",
          text: "Jede Spende hilft uns, Trainingsräume zu sichern, Workshops zu organisieren und künstlerische Projekte zu fördern. Aktuell fließt vieles ins Umbauvorhaben am Geodome (ca. 105.000 € gesamt: ca. 35.000 € Basis und ca. 70.000 € zusätzliche Technik & Ausbau). Spendenbescheinigungen können wir erst ausstellen, wenn die Gemeinnützigkeit amtlich bestätigt ist.",
          vorteile: [
            "Konkrete Unterstützung von Kunst und Kultur vor Ort",
            "Direkte Förderung der Münchner Kulturlandschaft",
            "Unterstützung lokaler Künstler*innen",
            "Transparente Mittelverwendung",
          ],
          betraege: [
            { betrag: "50€", beschreibung: "Unterstützt einen Workshop-Tag" },
            { betrag: "100€", beschreibung: "Ermöglicht Probenzeit für ein Projekt" },
            { betrag: "250€", beschreibung: "Fördert eine Open Stage Veranstaltung" },
            { betrag: "500€+", beschreibung: "Ermöglicht größere Projekte und Formate" },
          ],
        },
        sponsoring: {
          titel: "Sponsoring",
          text: "Als Sponsor unterstützen Sie zeitgenössischen Zirkus und erhalten gleichzeitig wertvolle Sichtbarkeit für Ihr Unternehmen oder Ihre Organisation.",
          vorteile: [
            "Sichtbarkeit bei Veranstaltungen und auf unserer Website",
            "Assoziation mit innovativer, kultureller Arbeit",
            "Zielgruppenansprache: Kulturinteressierte, Künstler*innen, Familien",
            "CSR-Engagement mit nachhaltiger Wirkung",
            "Möglichkeit für Event-Sponsoring und Naming Rights",
            "Networking mit der Münchner Kulturszene",
          ],
          pakete: [
            {
              name: "Community Sponsor",
              betrag: "ab 500€/Jahr",
              inhalt: [
                "Logo auf Website",
                "Erwähnung bei Veranstaltungen",
                "Newsletter-Erwähnung",
              ],
            },
            {
              name: "Event Sponsor",
              betrag: "ab 1.000€/Event",
              inhalt: [
                "Prominente Platzierung bei Veranstaltung",
                "Logo auf Werbematerialien",
                "Social Media Erwähnung",
                "Gastplätze bei Veranstaltung",
              ],
            },
            {
              name: "Hauptsponsor",
              betrag: "ab 2.500€/Jahr",
              inhalt: [
                "Alle Community Sponsor Leistungen",
                "Exklusive Naming Rights möglich",
                "Präsentation bei allen Veranstaltungen",
                "Individuelle Kooperationsmöglichkeiten",
                "Regelmäßige Updates und Einblicke",
              ],
            },
          ],
        },
      },
    },
    {
      id: "kooperation",
      title: "Kooperation",
      text: "Kultur, Bildung, Soziales, Stadtteil: Wir freuen uns über Partnerschaften auf Augenhöhe.",
      cta: "Kooperation starten",
      subject: "Kooperation",
    },
  ],
  mitglieder: {
    intro: "Mitgliedschaft erfolgt per schriftlichem Antrag und Annahme durch den Vorstand.",
    success: "Dein Antrag ist eingegangen. Der Vorstand meldet sich per E-Mail.",
  },
  kontakt: {
    intro: "Schreib uns – wir melden uns zeitnah zurück.",
    fields: {
      name: "Name",
      email: "Email",
      nachricht: "Nachricht",
      datenschutz: "Ich habe die Datenschutzhinweise gelesen.",
    },
    success: "Danke! Deine Nachricht ist bei uns gelandet.",
  },
  impressum: {
    title: "Impressum",
    content: "Platzhalter – bitte ersetzen",
    organisation: {
      organe: "Vorstand und Mitgliederversammlung.",
      vorstand: {
        struktur: "1. Vorsitz, stellv. Vorsitz, Schatzmeister, ggf. bis zu 4 Beisitzer",
        wahl: "Ehrenamtlich, Wahl für 2 Jahre",
        vertretung: "Vertretung nach außen: jedes Vorstandsmitglied allein vertretungsberechtigt",
        geschaeftsordnung: "Geschäftsordnung möglich (vom Vorstand), Genehmigung durch Mitgliederversammlung",
      },
      mitgliederversammlung: {
        haeufigkeit: "Mindestens 1× jährlich, schriftliche Einladung mit Tagesordnung, Frist 4 Wochen",
        ausserordentlich: "Außerordentliche Versammlung möglich/erforderlich unter bestimmten Voraussetzungen",
        beschlussfaehigkeit: "Beschlussfähigkeit unabhängig von Zahl der Anwesenden",
        mehrheiten: "Mehrheiten: grundsätzlich einfache Mehrheit; Satzungsänderung 2/3, Auflösung 4/5",
      },
      kassenpruefung: "Kassenprüfung wird für 2 Jahre gewählt; prüft Belege, Verbuchung und satzungs-/steuer-konforme Mittelverwendung und berichtet an die Mitgliederversammlung.",
      transparenz: {
        aemter: "Grundsätzlich ehrenamtlich. Bei Bedarf können Ämter entgeltlich oder mit pauschalierter Aufwandsentschädigung ausgeübt werden (Beschluss Mitgliederversammlung).",
        auftraege: "Der Vorstand kann Aufträge an Dritte gegen angemessene Vergütung vergeben",
        aufwendungsersatz: "Aufwendungsersatz nach § 670 BGB möglich (mit Belegen, Frist 3 Monate)",
        finanzordnung: "Details regelt eine Finanzordnung (durch Mitgliederversammlung).",
      },
      vermoegensbindung: "Bei Auflösung/Aufhebung oder Wegfall des Zwecks fällt das Vermögen an die Landeshauptstadt München gemäß Satzung (§2).",
    },
  },
  datenschutz: {
    title: "Datenschutz",
    content: "Platzhalter – bitte ersetzen",
    mitgliedsdaten: {
      erhebung: "Erhebung von Mitgliedsdaten (z. B. Name, Anschrift, Geburtsdatum, Telefon, E-Mail) für die Mitgliederverwaltung",
      verarbeitung: "Verarbeitung/Speicherung im Rahmen der Mitgliedschaft",
      weitergabe: "Weitergabe ggf. an Verband/ähnliche Organisation (falls Mitgliedschaft besteht)",
      veroeffentlichung: "Veröffentlichung nur bei Beschluss der Mitgliederversammlung und ohne Widerspruch des Mitglieds",
    },
  },
  satzung: {
    download: satzungPdfPath,
    text: "Satzung (PDF)",
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Unterstützen", href: "/unterstuetzen" },
    { label: "Mitglied werden", href: "/mitglieder-werden" },
    { label: "Förderung", href: "/foerderung" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  footer: {
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
        inhalt: [
          "Logo auf Website (Unterstützer-Bereich)",
          "Erwähnung in ausgewählten Social Posts",
          "2 Freikarten pro Veranstaltung (nach Verfügbarkeit)",
        ],
      },
      {
        name: "Silber",
        betrag: "ab 7.500 €/Jahr",
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
        inhalt: [
          "Alles aus Silber",
          "Co-Branding eines Formats (z.B. Workshop-Tag / Show-Abend)",
          "Exklusiver Team-Workshop (Zirkus/Bewegung als Teamevent)",
          "10 Freikarten pro Veranstaltung (nach Verfügbarkeit)",
        ],
      },
    ],
    paketeHinweis: "Sie möchten gezielt Toiletten, Brandschutz, Technikpodium oder Backstage fördern? Wir schnüren gern ein passendes Paket.",
    unterstuetzer: {
      ueberschrift: "Unterstützer & Partner",
      text: "Hier zeigen wir Unternehmen und Institutionen, die den Geodome möglich machen. (Platzhalter – wird ergänzt.)",
    },
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
        beschreibung: "Rückzug für Artist*innen und Team; einfache Bar für Veranstaltungen und Publikum.",
      },
    ],
    unterlagen: [
      {
        titel: "Kostenüberschlag Umbau (PDF)",
        link: "#",
      },
      {
        titel: "Vereinssatzung (PDF)",
        link: satzungPdfPath,
      },
      {
        titel: "Projekt-Onepager (PDF)",
        link: "#",
      },
    ],
    kontakt: {
      text: "Wir freuen uns über ein kurzes Gespräch zur kulturellen Einordnung, Zielsetzung und Förderlogik.",
    },
  },
  disziplinen: [
    {
      name: "Ein Mann, Ein Koffer, Ein Wandazirkus",
      image: "/Cam Bilder /EinMannEinKofferEinWanndazirkus.webp",
      kategorie: "Performance",
    },
    {
      name: "Tellerdrehen",
      image: "/Cam Bilder /Tellerdrehen.webp",
      kategorie: "Manipulation",
    },
    {
      name: "Clownerie",
      image: "/Cam Bilder /Clownerie.webp",
      kategorie: "Performance",
    },
    {
      name: "Breakdance",
      image: "/Cam Bilder /Breakdance.webp",
      kategorie: "Tanz",
    },
    {
      name: "Contemporary Dance",
      image: "/Cam Bilder /Contemporary dance.webp",
      kategorie: "Tanz",
    },
    {
      name: "Chinese Pole",
      image: "/Cam Bilder /Chienese Pole.webp",
      kategorie: "Artistik",
    },
    {
      name: "Pantomime",
      image: "/Cam Bilder /Pantomime.webp",
      kategorie: "Performance",
    },
    {
      name: "Feuerwehr Akrobatik",
      image: "/Cam Bilder /Feuerwehr Akrobatik.webp",
      kategorie: "Artistik",
    },
    {
      name: "Canes",
      image: "/Cam Bilder /Canes.webp",
      kategorie: "Artistik",
    },
    {
      name: "Contortion",
      image: "/Cam Bilder /Contortion.webp",
      kategorie: "Artistik",
    },
    {
      name: "Drag",
      image: "/Cam Bilder /Drag.webp",
      kategorie: "Performance",
    },
    {
      name: "Aerial Silk",
      image: "/Cam Bilder /Areal silk.webp",
      kategorie: "Artistik",
    },
    {
      name: "Cyr Wheel",
      image: "/Cam Bilder /Cyr wheel.webp",
      kategorie: "Artistik",
    },
    {
      name: "Partnerakrobatik",
      image: "/Cam Bilder /Partneraktobatik.webp",
      kategorie: "Artistik",
    },
    {
      name: "Handstand",
      image: "/Cam Bilder /Handstand.webp",
      kategorie: "Artistik",
    },
    {
      name: "Magic",
      image: "/Cam Bilder /Magic.webp",
      kategorie: "Performance",
    },
    {
      name: "Luftartistik",
      image: "/Cam Bilder /Artistik Luft MCDonalds.webp",
      kategorie: "Artistik",
    },
  ],
} as const;
