package pkh.form.materials.abschnitte.g;

import java.util.List;

/**
 * @author Isabella, Thomas
 */
public class FormG {
    private boolean hatKonto;
    private List<Vermoegen> konto;
    private boolean hatGrundeigentum;
    private List<Vermoegen> grundeigentum;
    private boolean hatKraftfahrzeuge;
    private List<Vermoegen> kraftfahrzeuge;
    private boolean hatWertgegenstaende;
    private List<Vermoegen> wertgegenstaende;
    private boolean hatVersicherung;
    private List<Vermoegen> versicherung;
    private boolean hatSonstige;
    private List<Vermoegen> sonstige;

    public boolean isHatKonto() {
        return hatKonto;
    }

    public void setHatKonto(boolean hatKonto) {
        this.hatKonto = hatKonto;
    }

    public List<Vermoegen> getKonto() {
        return konto;
    }

    public void setKonto(List<Vermoegen> konto) {
        this.konto = konto;
    }

    public boolean isHatGrundeigentum() {
        return hatGrundeigentum;
    }

    public void setHatGrundeigentum(boolean hatGrundeigentum) {
        this.hatGrundeigentum = hatGrundeigentum;
    }

    public List<Vermoegen> getGrundeigentum() {
        return grundeigentum;
    }

    public void setGrundeigentum(List<Vermoegen> grundeigentum) {
        this.grundeigentum = grundeigentum;
    }

    public boolean isHatKraftfahrzeuge() {
        return hatKraftfahrzeuge;
    }

    public void setHatKraftfahrzeuge(boolean hatKraftfahrzeuge) {
        this.hatKraftfahrzeuge = hatKraftfahrzeuge;
    }

    public List<Vermoegen> getKraftfahrzeuge() {
        return kraftfahrzeuge;
    }

    public void setKraftfahrzeuge(List<Vermoegen> kraftfahrzeuge) {
        this.kraftfahrzeuge = kraftfahrzeuge;
    }

    public boolean isHatWertgegenstaende() {
        return hatWertgegenstaende;
    }

    public void setHatWertgegenstaende(boolean hatWertgegenstaende) {
        this.hatWertgegenstaende = hatWertgegenstaende;
    }

    public List<Vermoegen> getWertgegenstaende() {
        return wertgegenstaende;
    }

    public void setWertgegenstaende(List<Vermoegen> wertgegenstaende) {
        this.wertgegenstaende = wertgegenstaende;
    }

    public boolean isHatVersicherung() {
        return hatVersicherung;
    }

    public void setHatVersicherung(boolean hatVersicherung) {
        this.hatVersicherung = hatVersicherung;
    }

    public List<Vermoegen> getVersicherung() {
        return versicherung;
    }

    public void setVersicherung(List<Vermoegen> versicherung) {
        this.versicherung = versicherung;
    }

    public boolean isHatSonstige() {
        return hatSonstige;
    }

    public void setHatSonstige(boolean hatSonstige) {
        this.hatSonstige = hatSonstige;
    }

    public List<Vermoegen> getSonstige() {
        return sonstige;
    }

    public void setSonstige(List<Vermoegen> sonstige) {
        this.sonstige = sonstige;
    }

    public FormG() {
    }
}
