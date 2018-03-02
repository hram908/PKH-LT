package pkh.form.materials.abschnitte.h;

/**
 * @author Isabella, Thomas
 */
public class FormH {
    private String wohnraumgroesse;
    private String anzahlZimmer;
    private String personenImWohnraum;

    private boolean istMieter;
    private Raumnutzung mietDaten;

    private boolean istEigentuemer;
    private Raumnutzung eigentumsDaten;

    public String getWohnraumgroesse() {
        return wohnraumgroesse;
    }

    public void setWohnraumgroesse(String wohnraumgroesse) {
        this.wohnraumgroesse = wohnraumgroesse;
    }

    public String getAnzahlZimmer() {
        return anzahlZimmer;
    }

    public void setAnzahlZimmer(String anzahlZimmer) {
        this.anzahlZimmer = anzahlZimmer;
    }

    public String getPersonenImWohnraum() {
        return personenImWohnraum;
    }

    public void setPersonenImWohnraum(String personenImWohnraum) {
        this.personenImWohnraum = personenImWohnraum;
    }

    public boolean isIstMieter() {
        return istMieter;
    }

    public void setIstMieter(boolean istMieter) {
        this.istMieter = istMieter;
    }

    public Raumnutzung getMietDaten() {
        return mietDaten;
    }

    public void setMietDaten(Raumnutzung mietDaten) {
        this.mietDaten = mietDaten;
    }

    public boolean isIstEigentuemer() {
        return istEigentuemer;
    }

    public void setIstEigentuemer(boolean istEigentuemer) {
        this.istEigentuemer = istEigentuemer;
    }

    public Raumnutzung getEigentumsDaten() {
        return eigentumsDaten;
    }

    public void setEigentumsDaten(Raumnutzung eigentumsDaten) {
        this.eigentumsDaten = eigentumsDaten;
    }

    public FormH() {
    }
}
