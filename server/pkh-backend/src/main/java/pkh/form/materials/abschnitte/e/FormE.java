package pkh.form.materials.abschnitte.e;

import java.util.List;

/**
 * @author Isabella
 */
public class FormE {
    private List<Einnahmen> antragsteller;
    private List<Einnahmen> ehepartner;

    public FormE(List<Einnahmen> antragsteller, List<Einnahmen> ehepartner) {
        this.antragsteller = antragsteller;
        this.ehepartner = ehepartner;
    }
}
