package pkh.form.materials.abschnitte.d;

import java.util.List;

/**
 * @author Isabella
 */
public class FormD {
    private boolean gewaehrtNaturalunterhalt;
    private List<NaturalunterhaltRow> naturalunterhalt;

    public FormD(boolean gewaehrtNaturalunterhalt, List<NaturalunterhaltRow> naturalunterhalt) {
        this.gewaehrtNaturalunterhalt = gewaehrtNaturalunterhalt;
        this.naturalunterhalt = naturalunterhalt;
    }
}
