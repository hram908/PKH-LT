package pkh.form.materials.abschnitte.h;

/**
 * @author Isabella, Thomas
 */
public class FormH {
    private String wohnraumgroesse;
    private String zimmeranzahl;
    private String personenImWohnraum;
    private boolean istMieter;
    private Raumnutzung mieterNutzung;
    private boolean istEigentuemer;
    private Raumnutzung eigentumsNutzung;

    public FormH(String wohnraumgroesse, String zimmeranzahl, String personenImWohnraum, boolean istMieter,
                 Raumnutzung mieterNutzung, boolean istEigentuemer, Raumnutzung eigentumsNutzung) {
        this.wohnraumgroesse = wohnraumgroesse;
        this.zimmeranzahl = zimmeranzahl;
        this.personenImWohnraum = personenImWohnraum;
        this.istMieter = istMieter;
        this.mieterNutzung = mieterNutzung;
        this.istEigentuemer = istEigentuemer;
        this.eigentumsNutzung = eigentumsNutzung;
    }
}
