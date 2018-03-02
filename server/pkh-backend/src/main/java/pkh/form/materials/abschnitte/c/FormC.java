package pkh.form.materials.abschnitte.c;

import java.util.List;

/**
 * @author Isabella, Thomas
 */
public class FormC {
    public boolean isHatUnterhaltsanspruch() {
        return hatUnterhaltsanspruch;
    }

    public void setHatUnterhaltsanspruch(boolean hatUnterhaltsanspruch) {
        this.hatUnterhaltsanspruch = hatUnterhaltsanspruch;
    }

    public List<String> getUnterhaltsverpflichteter() {
        return unterhaltsverpflichteter;
    }

    public void setUnterhaltsverpflichteter(List<String> unterhaltsverpflichteter) {
        this.unterhaltsverpflichteter = unterhaltsverpflichteter;
    }

    private boolean hatUnterhaltsanspruch;
    private List<String> unterhaltsverpflichteter;

    public FormC() {
    }
}
