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
  public static readonly C_Hinweis = 'Bitte geben Sie auf einem weiteren Exemplar dieses Formulars seine persönlichen und ' +
    'wirtschaftlichen Verhältnisse an, sofern diese nicht bereits vollständig aus den folgenden Abschnitten ersichtlich sind.';

  // Formularabschnitt D
  public static readonly D_Frage = 'Gewähren die Angehörigen Bar- oder Naturalunterhalt?';
  public static readonly D_Name = 'Nachname';
  public static readonly D_Vorname = 'Vorname';
  public static readonly D_Geburtsdatum = 'Geburtsdatum';
  public static readonly D_Anschrift = 'Anschrift';
  public static readonly D_Angehoerige = '';

  // Formularabschnitt E

  // Formularabschnitt F
  public static readonly F_steuernBezeichnung = 'Steuern/Solidaritätszuschlag';
  public static readonly F_steuernBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_sozialversicherungsbeitreageBezeichnung = 'Sozialversicherungsbeiträge';
  public static readonly F_sozialversicherungsbeitreageBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_sonsVersicherungBezeichnung = 'Sonstige Versicherungen';
  public static readonly F_sonsVersicherungBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_fahrtZurArbeitBezeichnung = 'Fahrt zur Arbeit' +
    '(Kosten für öffentliche Verkehrsmittel oder einfache Entfernung bei der KFZ-Nutzung';
  public static readonly F_fahrtZurArbeitBetrag = 'Betrag in EUR pro Monat';
  public static readonly F_werbeUndBetriebskostenBezichnung = 'Sonstige Werbekosten/Betirebskosten';
  public static readonly werbeUndBetriebskostenBetrag = 'Betrag in EUR pro Monat';

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
  public static readonly G_sonstigeBetrag = 'Betrag in EUR';

  // Formularabschnitt H
  public static readonly H_gesamtgroesseWohnung = ' 1. Gesamtgröße des Wohnraums, den Sie ' +
    'allein oder gemeinsam mit anderen Personen bewohnen';
  public static readonly H_anzahlZimmer = '2. Anzahl der Zimmer';
  public static readonly H_anzahlPersonenWohnraum = '3. Anzahl der Personen, die diese Wohnraum bewohnen';
  public static readonly H_miete = 'Kaltmiete';
  public static readonly H_heizkosten = 'Heizungskosten';
  public static readonly H_sonstNebenkosten = 'sonstige Nebenkosten';
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

// Formularabschnitt I
  public static readonly I_bezeichnung = 'Bezeichung';
  public static readonly I_restschuld = 'Restschuld';
  public static readonly I_gesamtbelastung = 'Gesamtbelastung';
  public static readonly I_alleineZahlen = 'Ich allein zahle';
  public static readonly I_bezeichnung1 = 'Bezeichung';
  public static readonly I_restschuld1 = 'Restschuld';
  public static readonly I_gesamtbelastung1 = 'Gesamtbelastung';
  public static readonly I_alleineZahlen1 = 'Ich allein zahle';

  // Formularabschnitt J
  public static readonly J_belastungBezeichung = 'Bezeichung';
  public static readonly J_ichAlleineZahle = 'Ich allein zahle davon';
  public static readonly J_belastungBezeichung1 = 'Bezeichung';
  public static readonly J_ichAlleineZahle1 = 'Ich allein zahle davon';
}
