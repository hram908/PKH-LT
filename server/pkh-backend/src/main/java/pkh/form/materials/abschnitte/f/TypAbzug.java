package pkh.form.materials.abschnitte.f;

/**
 * @author Isabella, Thomas
 */
public class TypAbzug {
    private Abzug steuern;
    private Abzug sozialversicherung;
    private Abzug sonstigeVersicherungen;
    private Abzug arbeitsfahrtkosten;
    private Abzug werbungskosten;

    public Abzug getSteuern() {
        return steuern;
    }

    public void setSteuern(Abzug steuern) {
        this.steuern = steuern;
    }

    public Abzug getSozialversicherung() {
        return sozialversicherung;
    }

    public void setSozialversicherung(Abzug sozialversicherung) {
        this.sozialversicherung = sozialversicherung;
    }

    public Abzug getSonstigeVersicherungen() {
        return sonstigeVersicherungen;
    }

    public void setSonstigeVersicherungen(Abzug sonstigeVersicherungen) {
        this.sonstigeVersicherungen = sonstigeVersicherungen;
    }

    public Abzug getArbeitsfahrtkosten() {
        return arbeitsfahrtkosten;
    }

    public void setArbeitsfahrtkosten(Abzug arbeitsfahrtkosten) {
        this.arbeitsfahrtkosten = arbeitsfahrtkosten;
    }

    public Abzug getWerbungskosten() {
        return werbungskosten;
    }

    public void setWerbungskosten(Abzug werbungskosten) {
        this.werbungskosten = werbungskosten;
    }

    public TypAbzug() {
    }
}
