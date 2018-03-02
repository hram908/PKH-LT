package pkh.form.materials.abschnitte.h;

/**
 * @author Isabella, Thomas
 */
public class FremdmittelBelastung {
    private String datumDesVertrages;
    private String darlehensNehmer;
    private String kreditinstitut;
    private String zahlungsende;

    private String restschuld;
    private String tilgungMonatlich;

    public String getDatumDesVertrages() {
        return datumDesVertrages;
    }

    public void setDatumDesVertrages(String datumDesVertrages) {
        this.datumDesVertrages = datumDesVertrages;
    }

    public String getDarlehensNehmer() {
        return darlehensNehmer;
    }

    public void setDarlehensNehmer(String darlehensNehmer) {
        this.darlehensNehmer = darlehensNehmer;
    }

    public String getKreditinstitut() {
        return kreditinstitut;
    }

    public void setKreditinstitut(String kreditinstitut) {
        this.kreditinstitut = kreditinstitut;
    }

    public String getZahlungsende() {
        return zahlungsende;
    }

    public void setZahlungsende(String zahlungsende) {
        this.zahlungsende = zahlungsende;
    }

    public String getRestschuld() {
        return restschuld;
    }

    public void setRestschuld(String restschuld) {
        this.restschuld = restschuld;
    }

    public String getTilgungMonatlich() {
        return tilgungMonatlich;
    }

    public void setTilgungMonatlich(String tilgungMonatlich) {
        this.tilgungMonatlich = tilgungMonatlich;
    }

    public FremdmittelBelastung() {
    }
}
