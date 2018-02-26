package pkh.form.materials.abschnitte.a;

/**
 * @author Isabella
 */
public class FormA {
    private String vorname;
    private String nachname;
    private String geburtsname;
    private String berufstyp;
    private String beruf;
    private String geburtstag;
    private String familienstand;
    private String telefon;
    private String strasse;
    private String hausnummer;
    private String plz;
    private String ort;

    private boolean gesetzlicherVertreter;
    private String vertreterName;
    private String vertreterVorname;
    private String vertreterStrasse;
    private String vertreterHausnummer;
    private String vertreterPlz;
    private String vertreterOrt;
    private String vertreterTelefon;

    public FormA(String vorname, String nachname, String geburtsname, String berufstyp, String beruf, String geburtstag, String familienstand, String telefon, String strasse, String hausnummer, String plz, String ort, boolean gesetzlicherVertreter, String vertreterName, String vertreterVorname, String vertreterStrasse, String vertreterHausnummer, String vertreterPlz, String vertreterOrt, String vertreterTelefon) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.geburtsname = geburtsname;
        this.berufstyp = berufstyp;
        this.beruf = beruf;
        this.geburtstag = geburtstag;
        this.familienstand = familienstand;
        this.telefon = telefon;
        this.strasse = strasse;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.gesetzlicherVertreter = gesetzlicherVertreter;
        this.vertreterName = vertreterName;
        this.vertreterVorname = vertreterVorname;
        this.vertreterStrasse = vertreterStrasse;
        this.vertreterHausnummer = vertreterHausnummer;
        this.vertreterPlz = vertreterPlz;
        this.vertreterOrt = vertreterOrt;
        this.vertreterTelefon = vertreterTelefon;
    }
}
