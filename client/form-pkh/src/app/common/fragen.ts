/*
  Hier werden alle Fragen des Formulars vorgehalten
  Author: Thomas, Kevin
 */
export class Fragen {
  // Formularabschnitt A
  public readonly A = {
    'nachname': 'Nachname',
    'vorname': 'Vorname',
    'telefon': {
      'TEL_KRZ': 'Telefonnummer',
      'TEL_LNG': 'Tagsüber tel. erreichbar unter Nummer',
    }
  };
  public readonly A_Name = 'Nachname';
  public readonly A_Vorname = 'Vorname';
  public readonly A_Geburtsname = 'ggf. Geburtsname';
  public readonly A_Beruf = 'Beruf';
  public readonly A_Geburtsdatum = 'Geburtsdatum';
  public readonly A_Familienstand = 'Familienstand';
  public readonly A_Anschrift = 'Anschrift';
  public readonly A_Strasse = 'Straße';
  public readonly A_Hausnummer = 'Hausnummer';
  public readonly A_Plz = 'Posttleitzahl';
  public readonly A_Ort = 'Wohnort';
  public readonly A_vertreterBeschreibung = 'nicht der Anwalt, sondern ein Betreuer, die Eltern etc.';

  // Formularabschnitt B
  public readonly B_rechtsschutzBeschreibung = 'übernimmt die Anwalts- und Verfahrenskosten für viele Rechtsstreitigkeiten ' +
    'und kann für einzelne Rechtsgebiete oder gesamt abgeschlossen werden.';

  // Formularabschnitt C
  public readonly C_Frage = 'Haben Sie Angehörige, die Ihnen gegenüber gesetzlich zur Leistung von Unterhalt verpflichtet ' +
    'sind (auch wenn tatsächlich keine Leistungen erfolgen)?';
  public readonly C_Zusatz = 'z. B. Mutter, Vater, Ehepartner, eingetragene(r) Lebenspartner/in';
  public readonly C_FrageJa = 'Name des Unterhaltsverpflichteten';
  public readonly C_FrageJaEhe = 'Name des Ehepartners';
  public readonly C_FrageJaLebenspartner = 'Name des eingetragenen Lebenspartners';
  public readonly C_Hinweis = 'Falls die Eltern Unterhalt zahlen, müssen diese das Formular auch ausfüllen.';

  // Formularabschnitt D
  public readonly D_Name = 'Vollständiger Name';
  public readonly D_Geburtsdatum = 'Geburtsdatum';
  public readonly D_Strasse = 'Strasse';
  public readonly D_Hausnummer = 'Hausnummer';
  public readonly D_PLZ = 'PLZ';
  public readonly D_Ort = 'Ort';
  public readonly D_Verhaeltnis = 'Verhältnis';
  public readonly D_Monatsbetrag = 'Monatsbetrag';
  public readonly D_FrageAngehoeriger = 'Hat dieser Angehöriger eigene Einnahmen?';
  public readonly D_einnahmenAngehoeriger = 'Einnahmen des Angehörigen';

  // Formularabschnitt E
  public readonly E_defaultFrage = 'Haben Sie Einnahmen aus...';
  public readonly E_nichtSelbstArbeitBetrag = 'nicht selbstständiger Arbeit?';
  public readonly E_selbstArbeitBetrag = 'selbstständiger Arbeit?';
  public readonly E_kapitalvermoegenBetrag = 'Kapitalvermögen?';
  public readonly E_vermietungUndVerpachtungBetrag = 'Vermietung oder Verpachtung?';
  public readonly E_kindergeldBetrag = 'Kindergeld?';
  public readonly E_wohngeldBetrag = 'Wohngeld?';
  public readonly E_unterhaltBetrag = 'Unterhalt';
  public readonly E_renteUndPensionBetrag = 'Rente und/oder Pension?';
  public readonly E_arbeitslosengeldBetrag = 'Arbeitslosengeld';
  public readonly E_arbeitslosengeld2Betrag = 'Arbeitslosengeld II?';
  public readonly E_krankengeldBetrag = 'Krankengeld?';
  public readonly E_elterngeldBetrag = 'Elterngeld?';
  public readonly E_verpachtungBeschreibung = 'Im Gegensatz zur Miete darf bei einer Verpachtung ein Pächter nicht nur eine ' +
    'Sache nutzen, sondern darüber hinaus auch "Früchte" aus der Sache ziehen – also einen Gewinn erwirtschaften';
  public readonly E_andereEinnahmenBeschreibung = 'Alle anderen als die oben angegebenen Einnahmen, z.B. Weihnachts/Urlaubsgeld, ' +
    'Steuererstattung jährlich, BAföG mtl.';
  public readonly E_kapitalBeschreibung = 'Erträge der Vermögensverwaltung erfasst, die Erlöse oder Entgelte für die Überlassung ' +
    'von Kapital darstellen z.B. Aktiengewinn, Dividenden, Sparzinsen';
  public readonly E_selbstArbeitBeschreibung = 'Wenn man unabjängig von einem Arbeitsgeber auf eigenes Risiko seinen ' +
    'Lebensunterhalt bestreitet';

  // Formularabschnitt F
  public readonly F_steuernBezeichnung = 'Steuern';
  public readonly F_steuernBeschreibung = 'Einkommenssteuer, Lohnsteuer, Kirchensteuer, Solidaritätszuschlag. ' +
    'Nicht jedoch andere Steuern wie Umsatzsteuer und Erbschaftssteuer';
  public readonly F_solidaritaetBezeichnung = 'Solidarität';
  public readonly F_solidaritaetBeschreibung = 'Ist auf der Steuerabrechnung angegeben ';
  public readonly F_steuernBetrag = 'Betrag in EUR pro Monat';
  public readonly F_sozialversicherungsbeitreageBezeichnung = 'Sozialversicherungsbeiträge';
  public readonly F_sozialversicherungsbeitreageBeschreibung = 'Arbeitnehmerbeiträge zu Renten-, Kranken-, ' +
    'Arbeitslosen und Pflegeversicherung';
  public readonly F_sozialversicherungsbeitreageBetrag = 'Betrag in EUR pro Monat';
  public readonly F_sonsVersicherungBezeichnung = 'Sonstige Versicherungen';
  public readonly F_sonsVersicherungBeschreibung = 'insbsondere Privathaftpflicht- Hausrat-, Berufsunfähigkeits-, ' +
    'Unfallversicherung, Sterbegedversicherung, freiwillige Kranken- und Pflgegepflichtversicherung';
  public readonly F_sonsVersicherungBetrag = 'Betrag in EUR pro Monat';
  public readonly F_fahrtZurArbeitBezeichnung = 'Fahrt zur Arbeit';
  public readonly F_fahrtZurArbeitBetrag = 'Betrag in EUR pro Monat';
  public readonly F_werbeUndBetriebskostenBetrag = 'Betrag in EUR pro Monat';
  public readonly F_werbungskostenBeschreibung = 'Betrifft Arbeitnehmer. Man kann nicht viel falsch machen wenn' +
    'man da was reinschreibt, wovon man das Gefühl hat, dass es eine Belastung darstellt.' +
    'Jede Belastung, die mit der Wahrnehmung des Jobs zusammenhängt. Berlin Wohnsitz, Hamburg Arbeit: Miete doppelt \n' +
    'Für Arbeitsmittel pauschal 5.20€\n' +
    'Für jeden Entfernungskilometer zur Arbeit 5.20€';


  // Formularabschnitt G
  public readonly G_kontoBezeichnung = 'Bezeichnung';
  public readonly G_kontoBetrag = 'Betrag in EUR';
  public readonly G_grundeigentumBezeichnung = 'Bezeichnung';
  public readonly G_grundeigentumBetrag = 'Betrag in EUR';
  public readonly G_kraftfahrzeugeBezeichnung = 'Bezeichnung';
  public readonly G_kraftfahrzeugeBetrag = 'Betrag in EUR';
  public readonly G_wertgegenstaendeBezeichnung = 'Bezeichnung';
  public readonly G_wertgegenstaendeBetrag = 'Betrag in EUR';
  public readonly G_versicherungBezeichnung = 'Bezeichnung';
  public readonly G_versicherungBetrag = 'Betrag in EUR';
  public readonly G_sonstigeBezeichnung = 'Bezeichnung';
  public readonly G_bargeldBeschreibung = 'Grundsätzlich jeder Betrag';
  public readonly G_schmuckBeschreibung = 'ist anzugeben, wenn er den Rahmen des Üblichen' +
    ' übersteigt oder wenn es sich um Gegenstände von höherem Wert handelt';
  public readonly G_elektrGeraeteBeschreibung = 'ist anzugeben, wenn er den Rahmen des' +
    ' Üblichen übersteigt oder wenn es sich um Gegenstände von höherem Wert handelt';


  // Formularabschnitt H
  public readonly H = {
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
  public readonly H_miete = 'Kaltmiete';
  public readonly H_heizkosten = 'Heizungskosten';
  public readonly H_sonstNebenkosten = 'sonst. Nebenkosten';
  public readonly H_sonstNebenkostenZusatz = ' (kein Strom, Gas, Telefon oder GEZ)';
  public readonly H_gesamtbetrag = 'Gesamtbetrag';
  public readonly H_kostenAlleine = 'Ich allein zahle davon';
  public readonly H_zinsenUndTilgung = 'Zinsen und Tilgung';
  public readonly H_heizungskosten = 'Heizungskosten';
  public readonly H_uebrigeNebenkosten = 'übrige Nebenkosten';
  public readonly H_gesamtBetrag = 'Gesamtbetrag';
  public readonly H_zahleAlleine = 'Ich allein zahle davon';
  public readonly H_bezeichnung = 'Informationen zum Vertrag';
  public readonly H_dahrlenRestschuld = 'Restschuld in EUR';
  public readonly H_dahrlenZinsenUndTilgung = 'Zinsen und Tilgung';
  public readonly H_nutzungsVerhaeltnisseBeschreibung = 'z.B. Heimwohnen; Untermiete';
  public readonly H_erbbauBeschreibung = 'auf einem fremden Grundstück ein Gebäude zu errichten sowie dieses für ' +
    'seine eigenen Zwecke zu nutzen.';
  public readonly H_mietNebenkostenBeschreibung = 'auf den Mieter umgelegte Kosten, z.B. Grundsteuer, Wasserversorgung, ' +
    'Entwässerung, Straßenreinigung, Müllbeseitigung, Schornsteinfeger, Aufzug, Allgemeintrom, Hausreinigung, Gemeinschaftsantenne"';

// Formularabschnitt I
  public readonly I_bezeichnung = 'Bezeichung';
  public readonly I_restschuld = 'Restschuld';
  public readonly I_gesamtbelastung = 'Gesamtbelastung';
  public readonly I_alleineZahlen = 'monatlich zahle ich';
  public readonly I_zahlunsVerpflichtungBeschreibung = 'anrechenbare Versicherungsbeiträge, z.B.: Lebensversicherung ' +
    '(nur eine ist anrechenbar), Sterbegeldversicherung, Hausratversicherung, Haftpflichtversicherung, Glasversicherung,' +
    ' Unfallversicherung, Gebäudeversicherung, freiwillige Krankenversicherung, freiwillige Rentenversicherung, Riester-Rente, ' +
    'zur aktuellen Tätigkeit notwendige Rechtsschutzversicherung';

  // Formularabschnitt J
  public readonly J_belastungBezeichung = 'Bezeichung';
  public readonly J_ichAlleineZahle = 'Ich allein zahle davon';
  public readonly J_behinderungBeschreibung = 'Zeichen G im Ausweis';
  public readonly J_sgbIIBeschreibung = 'Kosten für aufwändige Ernährung (Intoleranzen), klassischer Mehrbedarf ' +
    'ist Schwangerschaft ';
  public readonly J_sgbXIIBeschreibung = 'Mehrbedarf wegen Behinderung';
}
