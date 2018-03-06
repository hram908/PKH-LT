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

    public List<Verpflichteter> getVerpflichteter() {
        return verpflichteter;
    }

    public void setVerpflichteter(List<Verpflichteter> verpflichteter) {
        this.verpflichteter = verpflichteter;
    }

    private boolean hatUnterhaltsanspruch;
    private List<Verpflichteter> verpflichteter;

    public FormC() {
    }
}

