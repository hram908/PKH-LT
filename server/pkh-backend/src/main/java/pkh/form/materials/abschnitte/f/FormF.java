package pkh.form.materials.abschnitte.f;

/**
 * @author Isabella
 */
public class FormF {
    private Abzug steuern;
    private Abzug sozialversicherung;
    private Abzug sonstigeVersicherungen;
    private Abzug arbeitsfahrtkosten;
    private Abzug werbungskosten;

    public FormF(Abzug steuern, Abzug sozialversicherung, Abzug sonstigeVersicherungen, Abzug arbeitsfahrtkosten, Abzug werbungskosten) {
        this.steuern = steuern;
        this.sozialversicherung = sozialversicherung;
        this.sonstigeVersicherungen = sonstigeVersicherungen;
        this.arbeitsfahrtkosten = arbeitsfahrtkosten;
        this.werbungskosten = werbungskosten;
    }
}
