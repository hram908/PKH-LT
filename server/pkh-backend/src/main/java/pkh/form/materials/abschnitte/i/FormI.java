package pkh.form.materials.abschnitte.i;

import java.util.List;

/**
 * @author Isabella Tran
 */
public class FormI {
    private boolean hatZahlungsverpflichtungen;

    public boolean isHatZahlungsverpflichtungen() {
        return hatZahlungsverpflichtungen;
    }

    public void setHatZahlungsverpflichtungen(boolean hatZahlungsverpflichtungen) {
        this.hatZahlungsverpflichtungen = hatZahlungsverpflichtungen;
    }

    public List<Schulden> getZahlungsverpflichtungen() {
        return zahlungsverpflichtungen;
    }

    public void setZahlungsverpflichtungen(List<Schulden> zahlungsverpflichtungen) {
        this.zahlungsverpflichtungen = zahlungsverpflichtungen;
    }

    private List<Schulden> zahlungsverpflichtungen;

    public FormI() {
    }
}
