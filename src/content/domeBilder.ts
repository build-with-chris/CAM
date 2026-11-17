/**
 * Fotos vom Pepe Dome, übernommen aus dem Repo pepe-dome am 17.11.2026.
 *
 * Breite und Höhe sind an der Datei ausgelesen. Jeder Alt-Text wurde am Bild
 * geprüft, nicht am Dateinamen. `anlass` nennt die Veranstaltung, soweit sie
 * sich aus dem Ordner im Dome-Repo ergibt. `credit` bleibt leer, bis die Namen
 * der Fotografen vorliegen. Erfunden wird nichts.
 *
 * Auswahl, Einsatzvorschläge und offene Rechtefragen: docs/dome/BILDER.md
 */
export type DomeBild = {
  src: string;
  width: number;
  height: number;
  alt: string;
  thema: "ort" | "publikum" | "show" | "technik" | "aufbau" | "cafe";
  anlass?: string;
  credit?: string;
};

export const domeBilder = {
  kuppelNacht: {
    src: "/images/dome/kuppel-nacht.webp",
    width: 1440,
    height: 1080,
    alt: "Die von innen orange erleuchtete Kuppel in der Dämmerung zwischen dunklen Bäumen, darüber zieht eine Wolke auf",
    thema: "ort",
    credit: undefined,
  },
  kuppelHerbst: {
    src: "/images/dome/kuppel-herbst.webp",
    width: 1800,
    height: 1198,
    alt: "Die weiß-blaue Kuppel im Park hinter einem Weg voller Herbstlaub, an den Bäumen hängt eine Wimpelkette",
    thema: "ort",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  kuppelCafeWiese: {
    src: "/images/dome/kuppel-cafe-wiese.webp",
    width: 1448,
    height: 1086,
    alt: "Ein Gast im Liegestuhl auf der Wiese, dahinter die Stufen des Theatrons, die weiße Kuppel und das Café",
    thema: "ort",
    credit: undefined,
  },
  kuppelInnenBuehne: {
    src: "/images/dome/kuppel-innen-buehne.webp",
    width: 1080,
    height: 810,
    alt: "Innenraum der Kuppel mit Holztragwerk, blauer Bespannung und Wimpelkette, davor eine Bühne mit dunklem Vorhang und eine Stuhlreihe",
    thema: "ort",
    credit: undefined,
  },
  kuppelTragwerkInnen: {
    src: "/images/dome/kuppel-tragwerk-innen.webp",
    width: 810,
    height: 1080,
    alt: "Blick in die leere Kuppel: das Holztragwerk aus Dreiecken vor blauer und gelb-oranger Bespannung",
    thema: "ort",
    credit: undefined,
  },
  publikumVolleReihen: {
    src: "/images/dome/publikum-volle-reihen.webp",
    width: 1800,
    height: 1200,
    alt: "Volle Zuschauerreihen in der Kuppel an einem Sommertag, viele Gäste tragen Blumen im Haar",
    thema: "publikum",
    anlass: "Flower Festival",
    credit: undefined,
  },
  partnerakrobatikPublikum: {
    src: "/images/dome/partnerakrobatik-publikum.webp",
    width: 1800,
    height: 1200,
    alt: "Zwei Paare zeigen Partnerakrobatik auf einem hellen Tanzteppich unter der Kuppel, ringsum sitzt das Publikum dicht an dicht",
    thema: "show",
    anlass: "Flower Festival",
    credit: undefined,
  },
  cyrWheelBuehne: {
    src: "/images/dome/cyr-wheel-buehne.webp",
    width: 1800,
    height: 1200,
    alt: "Artist steht breitbeinig im Cyr Wheel auf der Bühne, dahinter die blaue Bespannung der Kuppel und das Publikum",
    thema: "show",
    anlass: "Flower Festival",
    credit: undefined,
  },
  sitzkreisKuppel: {
    src: "/images/dome/sitzkreis-kuppel.webp",
    width: 2276,
    height: 1280,
    alt: "Rund zwanzig Menschen sitzen im Kreis auf dem Boden und auf Hockern unter der Kuppel, vorn steht ein kleiner Tisch mit Kerzen",
    // Erkennbare Personen, von Chris am 17.11.2026 für die Vereinsseite freigegeben.
    thema: "publikum",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  gartenWimpelkette: {
    src: "/images/dome/garten-wimpelkette.webp",
    width: 1800,
    height: 1200,
    alt: "Gäste in Sommerkleidung sitzen im Garten unter einer Wimpelkette, links steht eine überlebensgroße Papierblume",
    thema: "publikum",
    anlass: "Flower Festival",
    credit: undefined,
  },
  basteltisch: {
    src: "/images/dome/basteltisch.webp",
    width: 1800,
    height: 1200,
    alt: "Mehrere Gäste basteln an einem langen Tisch mit Papier, Stiften und Weingläsern",
    thema: "publikum",
    anlass: "Flower Festival",
    credit: undefined,
  },
  kartentrick: {
    src: "/images/dome/kartentrick.webp",
    width: 1800,
    height: 1200,
    alt: "Ein Zauberer hält einer Besucherin im Publikum Spielkarten zur Auswahl hin",
    thema: "publikum",
    anlass: "Flower Festival",
    credit: undefined,
  },
  offeneBuehneGetraenkekisten: {
    src: "/images/dome/offene-buehne-getraenkekisten.webp",
    width: 1800,
    height: 1198,
    alt: "Drei Personen in bunten Trainingsjacken stehen zwischen Getränkekisten auf der Bühne, davor sitzt das Publikum im blauen Licht",
    thema: "show",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  vertikaltuchBlau: {
    src: "/images/dome/vertikaltuch-blau.webp",
    width: 1800,
    height: 1085,
    alt: "Artistin hoch oben im Vertikaltuch, dahinter leuchtet blaues Licht durch das Kuppelgerüst",
    thema: "show",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  rollschuheGruppe: {
    src: "/images/dome/rollschuhe-gruppe.webp",
    width: 1800,
    height: 1246,
    alt: "Eine Gruppe auf Rollschuhen steht nebeneinander im rosa Bühnennebel",
    thema: "show",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  jonglageKeulen: {
    src: "/images/dome/jonglage-keulen.webp",
    width: 1201,
    height: 1800,
    alt: "Jongleur wirft Keulen in die Luft, hinter ihm die blaue Bespannung und das Holztragwerk der Kuppel",
    thema: "show",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  schlussapplaus: {
    src: "/images/dome/schlussapplaus.webp",
    width: 1800,
    height: 1200,
    alt: "Vier Mitwirkende stehen zum Schlussapplaus nebeneinander und heben die Hände",
    thema: "show",
    anlass: "Circus & Poetry",
    credit: undefined,
  },
  riggingKuppelspitze: {
    src: "/images/dome/rigging-kuppelspitze.webp",
    width: 1196,
    height: 1800,
    alt: "Zwei Personen ziehen im Gegenlicht an einem Seil, das in die Spitze der Kuppel führt",
    thema: "technik",
    anlass: "Freeman Festival",
    credit: undefined,
  },
  aufbauTragwerkKran: {
    src: "/images/dome/aufbau-tragwerk-kran.webp",
    width: 810,
    height: 1080,
    alt: "Das halb aufgebaute Holztragwerk der Kuppel im Theatron im Ostpark, daneben Hebebühnen und ein Kran",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauHolzknoten: {
    src: "/images/dome/aufbau-holzknoten.webp",
    width: 1080,
    height: 607,
    alt: "Nahaufnahme der Holzknoten des Kuppelgerüsts während des Aufbaus, dahinter Bäume und eine Hebebühne",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauBalkenTragen: {
    src: "/images/dome/aufbau-balken-tragen.webp",
    width: 810,
    height: 1080,
    alt: "Vier Personen tragen gemeinsam einen langen Holzbalken über das Pflaster zur Baustelle",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauKuppelhaut: {
    src: "/images/dome/aufbau-kuppelhaut.webp",
    width: 1080,
    height: 810,
    alt: "Blick von unten durch das Gerüst, auf dem die ersten hellen und blauen Bahnen der Kuppelhaut liegen, rechts eine Hebebühne",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauGeruestWolken: {
    src: "/images/dome/aufbau-geruest-wolken.webp",
    width: 810,
    height: 1080,
    alt: "Das Kuppelgerüst aus Holz im Theatron unter bedecktem Himmel",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauTheatronBauteile: {
    src: "/images/dome/aufbau-theatron-bauteile.webp",
    width: 810,
    height: 1080,
    alt: "Zwei Personen stehen im leeren Theatron und besprechen die auf dem Boden ausgelegten Bauteile",
    thema: "aufbau",
    credit: undefined,
  },
  aufbauTieflader: {
    src: "/images/dome/aufbau-tieflader.webp",
    width: 810,
    height: 1080,
    alt: "Ein beladener Lastwagen mit Material auf dem gepflasterten Platz am Ostpark",
    thema: "aufbau",
    credit: undefined,
  },
  cafeKueche: {
    src: "/images/dome/cafe-kueche.webp",
    width: 1800,
    height: 1200,
    alt: "Ein Koch richtet in der offenen Küche einen Teller an, davor wartet eine Besucherin am Tresen",
    thema: "cafe",
    anlass: "Flower Festival",
    credit: undefined,
  },
} satisfies Record<string, DomeBild>;

