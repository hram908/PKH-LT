/*
  Hier werden alle Fragen des Formulars vorgehalten
  Author: Thomas, Kevin
 */
export class Fragen {
  // Formularabschnitt A
  public static readonly A = {
    'nachname': 'Nachname',
    'vorname': 'Vorname',
    'telefon': {
      'TEL_KRZ': 'Telefonnummer',
      'TEL_LNG': 'Tagsüber tel. erreichbar unter Nummer',
    }
  };
  public static readonly A_Name = 'Nachname';
  public static readonly A_Vorname = 'Vorname';
  public static readonly A_Geburtsname = 'ggf. Geburtsname';
  public static readonly A_Beruf = 'Beruf';
  public static readonly A_Geburtsdatum = 'Geburtsdatum';
  public static readonly A_Familienstand = 'Familienstand';
  public static readonly A_Anschrift = 'Anschrift';
  public static readonly A_Strasse = 'Straße';
  public static readonly A_Hausnummer = 'Hausnummer';
  public static readonly A_Plz = 'Posttleitzahl';
  public static readonly A_Ort = 'Wohnort';
  public static readonly A_Telefonnummer = 'Tagsüber tel. erreichbar unter Nummer';
  public static readonly A_GesetzlicherVertreter = 'Sofern vorhanden: Gesetzlicher Vertreter';

  // Formularabschnitt B
  public static readonly B1 = 'Trägt eine Rechtsschutzversicherung oder eine andere Stelle/Person (z. B. Gewerkschaft, ' +
    'Mieterverein, Sozialverband) die Kosten Ihrer Prozess- oder Verfahrensführung?';
  public static readonly B2 = 'Wenn nein: Besteht eine Rechtsschutzversicherung oder die Mitgliedschaft in einem Verein/einer ' +
    'Organisation (z. B. Gewerkschaft, Mieterverein, Sozialverband), der/die die Kosten der beabsichtigten Prozess- oder ' +
    'Verfahrensführung tragen oder einen Prozessbevollmächtigten stellen könnte?';

  // Formularabschnitt C
  public static readonly C_Frage = 'Haben Sie Angehörige, die Ihnen gegenüber gesetzlich zur Leistung von Unterhalt verpflichtet ' +
    'sind (auch wenn tatsächlich keine Leistungen erfolgen)?';
  public static readonly C_Zusatz = 'z. B. Mutter, Vater, Ehepartner, eingetragene(r) Lebenspartner/in';
  public static readonly C_FrageJa = 'Name des Unterhaltsverpflichteten';
  public static readonly C_FrageJaEhe = 'Name des Ehepartners';
  public static readonly C_FrageJaLebenspartner = 'Name des eingetragenen Lebenspartners';
  public static readonly C_Hinweis = 'Falls die Eltern Unterhalt zahlen, müssen diese das Formular auch ausfüllen.';

  // Formularabschnitt D
  public static readonly D_Name = 'Vollständiger Name';
  public static readonly D_Geburtsdatum = 'Geburtsdatum';
  public static readonly D_Strasse = 'Strasse';
  public static readonly D_Hausnummer = 'Hausnummer';
  public static readonly D_PLZ = 'PLZ';
  public static readonly D_Ort = 'Ort';
  public static readonly D_Verhaeltnis = 'Verhältnis';
  public static readonly D_Monatsbetrag = 'Monatsbetrag';
  public static readonly D_FrageAngehoeriger = 'Hat dieser Angehöriger eigene Einnahmen?';
  public static readonly D_einnahmenAngehoeriger = 'Einnahmen des Angehörigen';

  // Formularabschnitt E
  public static readonly E_nichtSelbstArbeitBetrag = 'Haben Sie Einnahmen aus nicht selbstständiger Arbeit?';
  public static readonly E_selbstArbeitBetrag = 'Haben Sie Einnahmen aus selbstständiger Arbeit?';
  public static readonly E_kapitalvermoegenBetrag = 'Haben Sie Einnahmen aus Kapitalvermögen?';
  public static readonly E_vermietungUndVerpachtungBetrag = 'Haben Sie Einnahmen aus Vermietung oder Verpachtung?';
  public static readonly E_kindergeldBetrag = 'Haben Sie Einnahmen aus Kindergeld?';
  public static readonly E_wohngeldBetrag = 'Haben Sie Einnahmen aus Wohngeld?';
  public static readonly E_unterhaltBetrag = 'Haben Sie Einnahmen aus Unterhalt';
  public static readonly E_renteUndPensionBetrag = 'Haben Sie Einnahmen aus Rente und/oder Pension?';
  public static readonly E_arbeitslosengeldBetrag = 'Haben Sie Einnahmen aus Arbeitslosengeld';
  public static readonly E_arbeitslosengeld2Betrag = 'Haben Sie Einnahmen aus Arbeitslosengeld II?';
  public static readonly E_krankengeldBetrag = 'Haben Sie Einnahmen aus Krankengeld?';
  public static readonly E_elterngeldBetrag = 'Haben Sie Einnahmen aus Elterngeld?';

  // Formularabschnitt F
  public static readonly F_steuernBezeichnung = 'Steuern';
  public static readonly F_steuernBeschreibung = 'Einkommenssteuer, Lohnsteuer, Kirchensteuer, Solidaritätszuschlag. Nicht jedoch andere Steuern wie Umsatzsteuer und Erbschaftssteuer';
  public static readonly F_solidaritaetBezeichnung = 'Solidarität';
  public static readonly F_solidaritaetBeschreibung = 'Ist auf der Steuerabrechnung angegeben ';
  public static readonly F_steuernBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_sozialversicherungsbeitreageBezeichnung = 'Sozialversicherungsbeiträge';
  public static readonly F_sozialversicherungsbeitreageBeschreibung = 'Arbeitnehmerbeiträge zu Renten-, Kranken-, Arbeitslosen und Pflegeversicherung';
  public static readonly F_sozialversicherungsbeitreageBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_sonsVersicherungBezeichnung = 'Sonstige Versicherungen';
  public static readonly F_sonsVersicherungBeschreibung = 'insbsondere Privathaftpflicht- Hausrat-, Berufsunfähigkeits-, Unfallversicherung, Sterbegedversicherung, freiwillige Kranken- und Pflgegepflichtversicherung';
  public static readonly F_sonsVersicherungBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_fahrtZurArbeitBezeichnung = 'Fahrt zur Arbeit';
  public static readonly F_fahrtZurArbeitBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_werbeUndBetriebskostenBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_werbungskostenBeschreibung = 'Betrifft Arbeitnehmer. Man kann nicht viel falsch machen wenn' +
    'man da was reinschreibt, wovon man das Gefühl hat, dass es eine Belastung darstellt.' +
    'Jede Belastung, die mit der Wahrnehmung des Jobs zusammenhängt. Berlin Wohnsitz, Hamburg Arbeit: Miete doppelt \n' +
    'Für Arbeitsmittel pauschal 5.20€\n' +
    'Für jeden Entfernungskilometer zur Arbeit 5.20€';


  // Formularabschnitt G
  public static readonly G_kontoBezeichnung = 'Bezeichnung';
  public static readonly G_kontoBetrag = 'Betrag in EUR';
  public static readonly G_grundeigentumBezeichnung = 'Bezeichnung';
  public static readonly G_grundeigentumBetrag = 'Betrag in EUR';
  public static readonly G_kraftfahrzeugeBezeichnung = 'Bezeichnung';
  public static readonly G_kraftfahrzeugeBetrag = 'Betrag in EUR';
  public static readonly G_wertgegenstaendeBezeichnung = 'Bezeichnung';
  public static readonly G_wertgegenstaendeBetrag = 'Betrag in EUR';
  public static readonly G_versicherungBezeichnung = 'Bezeichnung';
  public static readonly G_versicherungBetrag = 'Betrag in EUR';
  public static readonly G_sonstigeBezeichnung = 'Bezeichnung';
  public static readonly G_bargeldBeschreibung = 'Grundsätzlich jeder Betrag';
  public static readonly G_schmuckBeschreibung = 'ist anzugeben, wenn er den Rahmen des Üblichen übersteigt oder wenn es sich um Gegenstände von höherem Wert handelt';
  public static readonly G_elektrGeraeteBeschreibung = 'ist anzugeben, wenn er den Rahmen des Üblichen übersteigt oder wenn es sich um Gegenstände von höherem Wert handelt';


  // Formularabschnitt H
  public static readonly H = {
    'groesseWohnung': {
      'WHG_KRZ': '1. Größe der Wohnung',
      'WHG_LNG': 'Gesamtgröße des Wohnraums, den Sie \' +\n' +
      '    \'allein oder gemeinsam mit anderen Personen bewohnen',
    },
    'anzahlZimmer': '2. Anzahl der Zimmer',
    'anzahlPersonen': {
      'PER_KRZ': '3. Anzahl der Personen',
      'PER_LNG': 'Anzahl der Personen, die diese Wohnraum bewohnen',
    },
  };
  public static readonly H_gesamtgroesseWohnung = ' 1. Gesamtgröße des Wohnraums, den Sie ' +
    'allein oder gemeinsam mit anderen Personen bewohnen';
  public static readonly H_anzahlZimmer = '2. Anzahl der Zimmer';
  public static readonly H_anzahlPersonenWohnraum = '3. Anzahl der Personen, die diese Wohnraum bewohnen';
  public static readonly H_miete = 'Kaltmiete';
  public static readonly H_heizkosten = 'Heizungskosten';
  public static readonly H_sonstNebenkosten = 'sonstige Nebenkosten (kein Strom, Gas, Telefon oder GEZ)';
  public static readonly H_gesamtbetrag = 'Gesamtbetrag';
  public static readonly H_kostenAlleine = 'Ich allein zahle davon';
  public static readonly H_zinsenUndTilgung = 'Zinsen und Tilgung';
  public static readonly H_heizungskosten = 'Heizungskosten';
  public static readonly H_uebrigeNebenkosten = 'übrige Nebenkosten';
  public static readonly H_gesamtBetrag = 'Gesamtbetrag';
  public static readonly H_zahleAlleine = 'Ich allein zahle davon';
  public static readonly H_bezeichnung = 'Informationen zum Vertrag';
  public static readonly H_dahrlenRestschuld = 'Restschuld in EUR';
  public static readonly H_dahrlenZinsenUndTilgung = 'Zinsen und Tilgung';
  public static readonly H_nutzungsVerhaeltnisseBeschreibung = 'z.B. Heimwohnen; Untermiete';
  public static readonly H_erbbauBeschreibung = 'auf einem fremden Grundstück ein Gebäude zu errichten sowie dieses für seine eigenen Zwecke zu nutzen.';
  public static readonly H_mietNebenkostenBeschreibung = 'auf den Mieter umgelegte Kosten, z.B. Grundsteuer, Wasserversorgung, ' +
    'Entwässerung, Straßenreinigung, Müllbeseitigung, Schornsteinfeger, Aufzug, Allgemeintrom, Hausreinigung, Gemeinschaftsantenne"';

// Formularabschnitt I
  public static readonly I_bezeichnung = 'Bezeichung';
  public static readonly I_restschuld = 'Restschuld';
  public static readonly I_gesamtbelastung = 'Gesamtbelastung';
  public static readonly I_alleineZahlen = 'monatlich zahle ich';
  public static readonly I_bezeichnung1 = 'Bezeichung';
  public static readonly I_restschuld1 = 'Restschuld';
  public static readonly I_gesamtbelastung1 = 'Gesamtbelastung';
  public static readonly I_alleineZahlen1 = 'monatlich zahle ich';
  public static readonly I_zahlunsVerpflichtungBeschreibung = 'Hier anrechenbare Versicherungsbeiträge sind z.B.: Lebensversicherung (besitzen Sie mehrere, darf nur eine ' +
    'angerechnet werden), Sterbegeldversicherung, Hausratversicherung, Haftpflichtversicherung, Glasversicherung, Unfallversicherung, ' +
    'Gebäudeversicherung, freiwillige Krankenversicherung, freiwillige Rentenversicherung, Riester-Rente, zur aktuellen Tätigkeit notwendige Rechtsschutzversicherung';

  // Formularabschnitt J
  public static readonly J_belastungBezeichung = 'Bezeichung';
  public static readonly J_ichAlleineZahle = 'Ich allein zahle davon';
  public static readonly J_belastungBezeichung1 = 'Bezeichung';
  public static readonly J_ichAlleineZahle1 = 'Ich allein zahle davon';
  public static readonly J_behinderungBeschreibung = 'Ich allein zahle davon';
  public static readonly J_sgbIIBeschreibung = 'Kosten für aufwändige Ernährung (Intoleranzen), klassischer Mehrbedarf ist Schwangerschaft ';
  public static readonly J_sgbXIIBeschreibung = 'Mehrbedarf wegen Behinderung';
}
