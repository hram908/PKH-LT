package pkh.form.materials.abschnitte.j;

/**
 * @author Isabella
 */
public class Belastung {
    private String beschreibung;

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getAlleinigeZahlung() {
        return alleinigeZahlung;
    }

    public void setAlleinigeZahlung(String alleinigeZahlung) {
        this.alleinigeZahlung = alleinigeZahlung;
    }

    private String alleinigeZahlung;

    public Belastung() {
    }
}
