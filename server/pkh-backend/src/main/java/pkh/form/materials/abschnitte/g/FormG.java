package pkh.form.materials.abschnitte.g;

import java.util.List;

/**
 * @author Isabella
 */
public class FormG {
    private boolean hatkonto;
    private List<Vermoegen> konto;
    private boolean hatgrundeigentum;
    private List<Vermoegen> grundeigentum;
    private boolean hatkraftfahrzeuge;
    private List<Vermoegen> kraftfahrzeuge;
    private boolean hatwertgegenstaende;
    private List<Vermoegen> wertgegenstaende;
    private boolean hatversicherung;
    private List<Vermoegen> versicherung;
    private boolean hatsonstige;
    private List<Vermoegen> sonstige;

    public FormG(boolean hatkonto, List<Vermoegen> konto, boolean hatgrundeigentum, List<Vermoegen> grundeigentum, boolean hatkraftfahrzeuge,
                 List<Vermoegen> kraftfahrzeuge, boolean hatwertgegenstaende, List<Vermoegen> wertgegenstaende, boolean hatversicherung,
                 List<Vermoegen> versicherung, boolean hatsonstige, List<Vermoegen> sonstige) {
        this.hatkonto = hatkonto;
        this.konto = konto;
        this.hatgrundeigentum = hatgrundeigentum;
        this.grundeigentum = grundeigentum;
        this.hatkraftfahrzeuge = hatkraftfahrzeuge;
        this.kraftfahrzeuge = kraftfahrzeuge;
        this.hatwertgegenstaende = hatwertgegenstaende;
        this.wertgegenstaende = wertgegenstaende;
        this.hatversicherung = hatversicherung;
        this.versicherung = versicherung;
        this.hatsonstige = hatsonstige;
        this.sonstige = sonstige;
    }
}
