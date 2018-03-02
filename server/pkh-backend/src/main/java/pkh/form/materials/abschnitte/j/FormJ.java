package pkh.form.materials.abschnitte.j;

import java.util.List;

/**
 * @author Isabella
 */
public class FormJ {
    private boolean hatBesondereBelastungen;
    private List<Belastung> besondereBelastungen;

    public FormJ() {
    }

    public boolean isHatBesondereBelastungen() {
        return hatBesondereBelastungen;
    }

    public void setHatBesondereBelastungen(boolean hatBesondereBelastungen) {
        this.hatBesondereBelastungen = hatBesondereBelastungen;
    }

    public List<Belastung> getBesondereBelastungen() {
        return besondereBelastungen;
    }

    public void setBesondereBelastungen(List<Belastung> besondereBelastungen) {
        this.besondereBelastungen = besondereBelastungen;
    }
}
