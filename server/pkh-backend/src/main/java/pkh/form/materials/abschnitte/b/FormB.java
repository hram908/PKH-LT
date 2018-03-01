package pkh.form.materials.abschnitte.b;

import java.util.List;

/**
 * @author Isabella
 */
public class FormB {
    private boolean hatKostentraeger;
    private boolean hatRechtschutzversicherung;

    private String uebernahme;
    private String tlwUebernahme;
    private String tlwUebernahmeTyp;
    private List<String> versicherung;
    private String antragGestellt;

    public FormB(boolean hatKostentraeger, boolean hatRechtschutzversicherung, String uebernahme, String tlwUebernahme, String tlwUebernahmeTyp,
                 List<String> versicherung, String antragGestellt) {
        this.hatKostentraeger = hatKostentraeger;
        this.hatRechtschutzversicherung = hatRechtschutzversicherung;
        this.uebernahme = uebernahme;
        this.tlwUebernahme = tlwUebernahme;
        this.tlwUebernahmeTyp = tlwUebernahmeTyp;
        this.versicherung = versicherung;
        this.antragGestellt = antragGestellt;
    }
}
