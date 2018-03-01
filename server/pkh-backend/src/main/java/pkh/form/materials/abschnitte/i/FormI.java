package pkh.form.materials.abschnitte.i;

import java.util.List;

/**
 * @author Isabella Tran
 */
public class FormI {
    private boolean hatZahlungsverpflichtungen;
    private List<Schulden> zahlungsverpflichtungen;

    public FormI(boolean hatZahlungsverpflichtungen, List<Schulden> zahlungsverpflichtungen) {
        this.hatZahlungsverpflichtungen = hatZahlungsverpflichtungen;
        this.zahlungsverpflichtungen = zahlungsverpflichtungen;
    }
}
