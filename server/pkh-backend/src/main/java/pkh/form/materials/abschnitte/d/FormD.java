package pkh.form.materials.abschnitte.d;

import java.util.List;

/**
 * @author Isabella, Thomas
 */
public class FormD {
    private boolean gewaehrtNaturalunterhalt;
    private List<NaturalunterhaltRow> naturalunterhalt;

    public boolean isGewaehrtNaturalunterhalt() {
        return gewaehrtNaturalunterhalt;
    }

    public void setGewaehrtNaturalunterhalt(boolean gewaehrtNaturalunterhalt) {
        this.gewaehrtNaturalunterhalt = gewaehrtNaturalunterhalt;
    }

    public List<NaturalunterhaltRow> getNaturalunterhalt() {
        return naturalunterhalt;
    }

    public void setNaturalunterhalt(List<NaturalunterhaltRow> naturalunterhalt) {
        this.naturalunterhalt = naturalunterhalt;
    }

    public FormD() {
    }
}
