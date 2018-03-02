package pkh.form.materials.abschnitte.h;

import java.util.List;

/**
 * @author Isabella
 **/
public class Raumnutzung {
    private String mieteOderZinsen;
    private String heizungskosten;
    private String uebrigeNebenkosten;
    private String gesamtbetrag;
    private String alleinigeZahlung;

    private boolean hatBelastungAusFremdmitteln;
    private List<FremdmittelBelastung> belastungAusFremdmitteln;

    public String getMieteOderZinsen() {
        return mieteOderZinsen;
    }

    public void setMieteOderZinsen(String mieteOderZinsen) {
        this.mieteOderZinsen = mieteOderZinsen;
    }

    public String getHeizungskosten() {
        return heizungskosten;
    }

    public void setHeizungskosten(String heizungskosten) {
        this.heizungskosten = heizungskosten;
    }

    public String getUebrigeNebenkosten() {
        return uebrigeNebenkosten;
    }

    public void setUebrigeNebenkosten(String uebrigeNebenkosten) {
        this.uebrigeNebenkosten = uebrigeNebenkosten;
    }

    public String getGesamtbetrag() {
        return gesamtbetrag;
    }

    public void setGesamtbetrag(String gesamtbetrag) {
        this.gesamtbetrag = gesamtbetrag;
    }

    public String getAlleinigeZahlung() {
        return alleinigeZahlung;
    }

    public void setAlleinigeZahlung(String alleinigeZahlung) {
        this.alleinigeZahlung = alleinigeZahlung;
    }

    public boolean isHatBelastungAusFremdmitteln() {
        return hatBelastungAusFremdmitteln;
    }

    public void setHatBelastungAusFremdmitteln(boolean hatBelastungAusFremdmitteln) {
        this.hatBelastungAusFremdmitteln = hatBelastungAusFremdmitteln;
    }

    public List<FremdmittelBelastung> getBelastungAusFremdmitteln() {
        return belastungAusFremdmitteln;
    }

    public void setBelastungAusFremdmitteln(List<FremdmittelBelastung> belastungAusFremdmitteln) {
        this.belastungAusFremdmitteln = belastungAusFremdmitteln;
    }

    public Raumnutzung() {
    }
}
