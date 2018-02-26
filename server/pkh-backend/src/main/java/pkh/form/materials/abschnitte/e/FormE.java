package pkh.form.materials.abschnitte.e;

import java.util.List;

/**
 * @author Isabella
 */
public class FormE {
    private List<String> einnahmen;
    private List<WeitereEinnahmen> weitereEinnahmen;

    public FormE(List<String> einnahmen, List<WeitereEinnahmen> weitereEinnahmen) {
        this.einnahmen = einnahmen;
        this.weitereEinnahmen = weitereEinnahmen;
    }
}
