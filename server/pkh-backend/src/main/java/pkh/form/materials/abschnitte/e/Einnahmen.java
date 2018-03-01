package pkh.form.materials.abschnitte.e;

import java.util.List;

public class Einnahmen {
    private List<WeitereEinnahmen> weitereEinnahmen;

    private boolean hatNichtselbstarbeit;
    private String nichtselbstarbeit;

    private boolean hatSelbstarbeit;
    private String selbstarbeit;

    private boolean hatVermietung;
    private String vermietung;

    private boolean hatKapital;
    private String kapital;

    private boolean hatWohngeld;
    private String wohngeld;

    private boolean hatUnterhalt;
    private String unterhalt;

    private boolean hatRente;
    private String rente;

    private boolean hatArbeitslosg1;
    private String arbeitslosg1;

    private boolean hatArbeitslosg2;
    private String arbeitslosg2;

    private boolean hatKrankengeld;
    private String krankengeld;

    private boolean hatElterngeld;
    private String elterngeld;

    private boolean hatKindergeld;
    private String kindergeld;

    public Einnahmen(List<WeitereEinnahmen> weitereEinnahmen, boolean hatNichtselbstarbeit, String nichtselbstarbeit, boolean hatSelbstarbeit, String selbstarbeit,
                     boolean hatVermietung, String vermietung, boolean hatKapital, String kapital, boolean hatWohngeld, String wohngeld, boolean hatUnterhalt,
                     String unterhalt, boolean hatRente, String rente, boolean hatArbeitslosg1, String arbeitslosg1, boolean hatArbeitslosg2, String arbeitslosg2,
                     boolean hatKrankengeld, String krankengeld, boolean hatElterngeld, String elterngeld, boolean hatKindergeld, String kindergeld) {
        this.weitereEinnahmen = weitereEinnahmen;
        this.hatNichtselbstarbeit = hatNichtselbstarbeit;
        this.nichtselbstarbeit = nichtselbstarbeit;
        this.hatSelbstarbeit = hatSelbstarbeit;
        this.selbstarbeit = selbstarbeit;
        this.hatVermietung = hatVermietung;
        this.vermietung = vermietung;
        this.hatKapital = hatKapital;
        this.kapital = kapital;
        this.hatWohngeld = hatWohngeld;
        this.wohngeld = wohngeld;
        this.hatUnterhalt = hatUnterhalt;
        this.unterhalt = unterhalt;
        this.hatRente = hatRente;
        this.rente = rente;
        this.hatArbeitslosg1 = hatArbeitslosg1;
        this.arbeitslosg1 = arbeitslosg1;
        this.hatArbeitslosg2 = hatArbeitslosg2;
        this.arbeitslosg2 = arbeitslosg2;
        this.hatKrankengeld = hatKrankengeld;
        this.krankengeld = krankengeld;
        this.hatElterngeld = hatElterngeld;
        this.elterngeld = elterngeld;
        this.hatKindergeld = hatKindergeld;
        this.kindergeld = kindergeld;
    }
}
