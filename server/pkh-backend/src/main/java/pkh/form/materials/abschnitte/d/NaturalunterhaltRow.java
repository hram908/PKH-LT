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

    public NaturalunterhaltRow(String vollstaendigerName, String geburtsdatum, String verhaeltnis, String monatsbeitrag, String einnahmenAngehoeriger) {
        this.vollstaendigerName = vollstaendigerName;
        this.geburtsdatum = geburtsdatum;
        this.verhaeltnis = verhaeltnis;
        this.monatsbeitrag = monatsbeitrag;
        this.einnahmenAngehoeriger = einnahmenAngehoeriger;
    }
}
