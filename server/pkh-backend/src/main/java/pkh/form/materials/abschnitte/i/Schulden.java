package pkh.form.materials.abschnitte.i;

/**
 * @author  Isabella
 */
public class Schulden {
    private String beschreibung;
    private String restschuld;
    private String gesamtbelastungMtl;
    private String einigeZahlung;

    public Schulden(String beschreibung, String restschuld, String gesamtbelastungMtl, String einigeZahlung) {
        this.beschreibung = beschreibung;
        this.restschuld = restschuld;
        this.gesamtbelastungMtl = gesamtbelastungMtl;
        this.einigeZahlung = einigeZahlung;
    }
}
