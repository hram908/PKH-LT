package pkh.form.materials.abschnitte.d;

/**
 * @author Isabella
 */
public class NaturalunterhaltRow {
    private String vollstaendigerName;
    private String geburtsdatum;
    private String verhaeltnis;
    private String monatsbeitrag;
    private String einnahmenAngehoeriger;
    private boolean hatAngehoerigerEinnahmen;
    private String monatsbetrag;
    private String strasse;
    private String hausnummer;
    private String plz;
    private String ort;

    public NaturalunterhaltRow(String vollstaendigerName, String geburtsdatum, String verhaeltnis, String monatsbeitrag, String einnahmenAngehoeriger,
                               boolean hatAngehoerigerEinnahmen, String monatsbetrag, String strasse, String hausnummer, String plz, String ort) {
        this.vollstaendigerName = vollstaendigerName;
        this.geburtsdatum = geburtsdatum;
        this.verhaeltnis = verhaeltnis;
        this.monatsbeitrag = monatsbeitrag;
        this.einnahmenAngehoeriger = einnahmenAngehoeriger;
        this.hatAngehoerigerEinnahmen = hatAngehoerigerEinnahmen;
        this.monatsbetrag = monatsbetrag;
        this.strasse = strasse;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
    }
}
