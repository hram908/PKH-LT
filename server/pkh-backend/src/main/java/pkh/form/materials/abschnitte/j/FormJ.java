package pkh.form.materials.abschnitte.j;

import java.util.List;

/**
 * @author Isabella
 */
public class FormJ {
    private boolean hatBesondereBelastungen;
    private List<Belastung> besondereBelastungen;

    public FormJ(boolean hatBesondereBelastungen, List<Belastung> besondereBelastungen) {
        this.hatBesondereBelastungen = hatBesondereBelastungen;
        this.besondereBelastungen = besondereBelastungen;
    }
}
