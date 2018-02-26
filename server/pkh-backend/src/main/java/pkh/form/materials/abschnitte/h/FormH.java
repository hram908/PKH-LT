package pkh.form.materials.abschnitte.h;

/**
 * @author Isabella Tran
 */
public class FormH {
    private int zimmeranzahl;
    private int personenImWohnraum;
    private Raumnutzung mieterNutzung;
    private Raumnutzung eigentumsNutzung;

    public FormH(int zimmeranzahl, int personenImWohnraum, Raumnutzung mieterNutzung, Raumnutzung eigentumsNutzung) {
        this.zimmeranzahl = zimmeranzahl;
        this.personenImWohnraum = personenImWohnraum;
        this.mieterNutzung = mieterNutzung;
        this.eigentumsNutzung = eigentumsNutzung;
    }
}
