package pkh.form.materials.abschnitte.f;

public class TypAbzug {
    private Abzug steuern;
    private Abzug sozialversicherung;
    private Abzug sonstigeVersicherungen;
    private Abzug arbeitsfahrtkosten;
    private Abzug werbungskosten;

    public TypAbzug(Abzug steuern, Abzug sozialversicherung, Abzug sonstigeVersicherungen, Abzug arbeitsfahrtkosten, Abzug werbungskosten) {
        this.steuern = steuern;
        this.sozialversicherung = sozialversicherung;
        this.sonstigeVersicherungen = sonstigeVersicherungen;
        this.arbeitsfahrtkosten = arbeitsfahrtkosten;
        this.werbungskosten = werbungskosten;
    }
}
