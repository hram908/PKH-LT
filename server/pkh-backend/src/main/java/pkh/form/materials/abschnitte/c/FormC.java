package pkh.form.materials.abschnitte.c;

import java.util.List;

/**
 * @author Isabella, Thomas
 */
public class FormC {
    private boolean hatUnterhaltsanspruch;
    private List<String> unterhaltsverpflichteter;

    public FormC(boolean hatUnterhaltsanspruch, List<String> unterhaltsverpflichteter) {
        this.hatUnterhaltsanspruch = hatUnterhaltsanspruch;
        this.unterhaltsverpflichteter = unterhaltsverpflichteter;
    }
}
