package pkh.form.materials.abschnitte.i;

/**
 * @author Isabella
 */
public class Schulden {
    private String beschreibung;
    private String restschuld;
    private String gesamtbelastungMtl;
    private String alleinigeZahlung;

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getRestschuld() {
        return restschuld;
    }

    public void setRestschuld(String restschuld) {
        this.restschuld = restschuld;
    }

    public String getGesamtbelastungMtl() {
        return gesamtbelastungMtl;
    }

    public void setGesamtbelastungMtl(String gesamtbelastungMtl) {
        this.gesamtbelastungMtl = gesamtbelastungMtl;
    }

    public String getAlleinigeZahlung() {
        return alleinigeZahlung;
    }

    public void setAlleinigeZahlung(String alleinigeZahlung) {
        this.alleinigeZahlung = alleinigeZahlung;
    }

    public Schulden() {
    }
}
