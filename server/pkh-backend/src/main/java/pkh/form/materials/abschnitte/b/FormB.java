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

    public boolean isHatKostentraeger() {
        return hatKostentraeger;
    }

    public void setHatKostentraeger(boolean hatKostentraeger) {
        this.hatKostentraeger = hatKostentraeger;
    }

    public boolean isHatRechtschutzversicherung() {
        return hatRechtschutzversicherung;
    }

    public void setHatRechtschutzversicherung(boolean hatRechtschutzversicherung) {
        this.hatRechtschutzversicherung = hatRechtschutzversicherung;
    }

    public String getUebernahme() {
        return uebernahme;
    }

    public void setUebernahme(String uebernahme) {
        this.uebernahme = uebernahme;
    }

    public String getTlwUebernahme() {
        return tlwUebernahme;
    }

    public void setTlwUebernahme(String tlwUebernahme) {
        this.tlwUebernahme = tlwUebernahme;
    }

    public String getTlwUebernahmeTyp() {
        return tlwUebernahmeTyp;
    }

    public void setTlwUebernahmeTyp(String tlwUebernahmeTyp) {
        this.tlwUebernahmeTyp = tlwUebernahmeTyp;
    }

    public List<String> getVersicherung() {
        return versicherung;
    }

    public void setVersicherung(List<String> versicherung) {
        this.versicherung = versicherung;
    }

    public String getAntragGestellt() {
        return antragGestellt;
    }

    public void setAntragGestellt(String antragGestellt) {
        this.antragGestellt = antragGestellt;
    }

    public FormB() {
    }
}
