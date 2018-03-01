package pkh.form.materials.abschnitte.h;

import java.util.List;

/**
 * @author Isabella
 **/
public class Raumnutzung {
    private int mieteOderZinsen;
    private int heizungskosten;
    private int uebrigeNebenkosten;
    private int gesamtbetrag;
    private int alleinigeZahlung;
    private boolean hatBelastungAusFremdmitteln;
    private List<FremdmittelBelastung> belastungAusFremdmitteln;

    public Raumnutzung(int mieteOderZinsen, int heizungskosten, int uebrigeNebenkosten, int gesamtbetrag, int alleinigeZahlung,
                       boolean hatBelastungAusFremdmitteln, List<FremdmittelBelastung> belastungAusFremdmitteln) {
        this.mieteOderZinsen = mieteOderZinsen;
        this.heizungskosten = heizungskosten;
        this.uebrigeNebenkosten = uebrigeNebenkosten;
        this.gesamtbetrag = gesamtbetrag;
        this.alleinigeZahlung = alleinigeZahlung;
        this.hatBelastungAusFremdmitteln = hatBelastungAusFremdmitteln;
        this.belastungAusFremdmitteln = belastungAusFremdmitteln;
    }
}
