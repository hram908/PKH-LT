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
    private String tilgungMonatlich;

    public FremdmittelBelastung(String datumDesVertrages, String darlehensNehmer, String kreditinstitut, String zahlungsende, String restschuld, String tilgungMonatlich) {
        this.datumDesVertrages = datumDesVertrages;
        this.darlehensNehmer = darlehensNehmer;
        this.kreditinstitut = kreditinstitut;
        this.zahlungsende = zahlungsende;
        this.restschuld = restschuld;
        this.tilgungMonatlich = tilgungMonatlich;
    }
}
