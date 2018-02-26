package pkh.form.materials.abschnitte.g;

import java.util.List;

/**
 * @author Isabella
 */
public class FormG {
    private Vermoegen konto;
    private List<Vermoegen> gruneigentum;
    private List<Vermoegen> kraftfahrzeuge;
    private List<Vermoegen> wertgegenstaende;
    private List<Vermoegen> versicherung;
    private List<Vermoegen> sonstige;

    public FormG(Vermoegen konto, List<Vermoegen> gruneigentum, List<Vermoegen> kraftfahrzeuge, List<Vermoegen> wertgegenstaende, List<Vermoegen> versicherung, List<Vermoegen> sonstige) {
        this.konto = konto;
        this.gruneigentum = gruneigentum;
        this.kraftfahrzeuge = kraftfahrzeuge;
        this.wertgegenstaende = wertgegenstaende;
        this.versicherung = versicherung;
        this.sonstige = sonstige;
    }
}
