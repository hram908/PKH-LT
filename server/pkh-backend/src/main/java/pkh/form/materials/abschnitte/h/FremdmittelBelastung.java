package pkh.form.materials.abschnitte.h;

/**
 * @author Isabella
 */
public class FremdmittelBelastung {
    // first block
    private String datumDesVertrages;
    private String darlehensNehmer;
    private String kreditinstitut;
    private String zahlungsende;

    private String restschuld;
    private String zinsenMonatlich;

    public FremdmittelBelastung(String datumDesVertrages, String darlehensNehmer, String kreditinstitut, String zahlungsende, String restschuld, String zinsenMonatlich) {
        this.datumDesVertrages = datumDesVertrages;
        this.darlehensNehmer = darlehensNehmer;
        this.kreditinstitut = kreditinstitut;
        this.zahlungsende = zahlungsende;
        this.restschuld = restschuld;
        this.zinsenMonatlich = zinsenMonatlich;
    }
}
