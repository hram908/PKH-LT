package pkh.form.pdfConverter.materials;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public enum Fields {
    // Form A
    A_NAME("name", "Text1"),
    A_BERUF("beruf", "Text2"),
    A_GEBURTSDATUM("geburtsdatum", "Text3"),
    A_FAMILIENSTAND("familienstand", "Text4"),
    A_ADRESSE("adresse", "Text5"),
    A_TELEFON("telefon", "Text6"),
    A_GES_VERTRETER("ges_vertreter", "Text7"),

    // Form B
    B_RECHTSCHUTZ_NEIN("rechtschutz_nein", "Kontrollkästchen1"),
    B_RECHTSCHUTZ_JA("rechtschutz_ja", "Kontrollkästchen2"),
    B_HOEHE("hoehe", "Text8"),
    B_MITGLIEDSCHAFT_NEIN("mitgliedschaft_nein", "Kontrollkästchen3"),
    B_MITGLIEDSCHAFT_JA("mitgliedschaft_ja", "Kontrollkästchen4"),
    B_BEZEICHNUNG_TRAEGER("bezeichnung_traeger", "Text9"),

    //Form C
    C_HATUNTERHALTSANSPRUCHNEIN ("hatunterhaltsanspruchnein", "Kontrollkästchen5"),
    C_HATUNTERHALTSANSPRUCHJA ("hatunterhalsanspruchja", "Kontrollkästchen6"),
    C_UNTERHALTSVERPFLICHTETER ("unterhaltsverpflichteter", "Text12"),

    //Form D
    D_NATURALVOLLSTAENDIGERNAME ("naturalvollstaendigername","Text14"),
    D_NATURALSTRASSE ("naturalstrasse","Text14"),
    D_NATURALPLZ ("naturalplz","Text14"),
    D_NATURALORT ("naturalort","Text14"),
    D_NATURALGEBURSTDATUM ("naturalgeburtsdatum","Text15"),
    D_NATURALVERHAELTNIS ("naturalverhaeltnis","Text16"),
    D_NATURALMONATSBETRAG ("naturalmonatsbeitrag","Text17"),
    D_NATURALHATANGEHOERIGEREINNAMENNEIN ("naturalhatangehoerigereinnamennein","Kontrollkästchen7"),
    D_NATURALHATANGEHOERIGEREINNAMENJA ("naturalhatangehoerigereinnamenja","Kontrollkästchen8"),
    D_NATURALEINNAMENANGEHOERIGER ("naturaleinnamenangehoeriger","Text18"),
    D_NATURALVOLLSTAENDIGERNAME1 ("naturalvollstaendigername1","Text20"),
    D_NATURALSTRASSE1 ("naturalstrasse1","Text20"),
    D_NATURALPLZ1 ("naturalplz1","Text20"),
    D_NATURALORT1 ("naturalort1","Text20"),
    D_NATURALGEBURSTDATUM1 ("naturalgeburtsdatum1","Text21"),
    D_NATURALVERHAELTNIS1 ("naturalverhaeltnis1","Text22"),
    D_NATURALMONATSBETRAG1 ("naturalmonatsbeitrag1","Text23"),
    D_NATURALHATANGEHOERIGEREINNAMENNEIN1 ("naturalhatangehoerigereinnamennein1","Kontrollkästchen9"),
    D_NATURALHATANGEHOERIGEREINNAMENJA1 ("naturalhatangehoerigereinnamenja1","Kontrollkästchen10"),
    D_NATURALEINNAMENANGEHOERIGER1 ("naturaleinnamenangehoeriger1","Text24"),
    D_NATURALVOLLSTAENDIGERNAME2 ("naturalvollstaendigername2","Text26"),
    D_NATURALSTRASSE2 ("naturalstrasse2","Text26"),
    D_NATURALPLZ2 ("naturalplz2","Text26"),
    D_NATURALORT2 ("naturalort2","Text26"),
    D_NATURALGEBURSTDATUM2 ("naturalgeburtsdatum2","Text27"),
    D_NATURALVERHAELTNIS2 ("naturalverhaeltnis2","Text28"),
    D_NATURALMONATSBETRAG2 ("naturalmonatsbeitrag2","Text29"),
    D_NATURALHATANGEHOERIGEREINNAMENNEIN2 ("naturalhatangehoerigereinnamennein2","Kontrollkästchen11"),
    D_NATURALHATANGEHOERIGEREINNAMENJA2 ("naturalhatangehoerigereinnamenja2","Kontrollkästchen12"),
    D_NATURALEINNAMENANGEHOERIGER2 ("naturaleinnamenangehoeriger2","Text30"),
    D_NATURALVOLLSTAENDIGERNAME3 ("naturalvollstaendigername3","Text32"),
    D_NATURALSTRASSE3 ("naturalstrasse3","Text32"),
    D_NATURALPLZ3 ("naturalplz3","Text32"),
    D_NATURALORT3 ("naturalort3","Text32"),
    D_NATURALGEBURSTDATUM3 ("naturalgeburtsdatum3","Text33"),
    D_NATURALVERHAELTNIS3 ("naturalverhaeltnis3","Text34"),
    D_NATURALMONATSBETRAG3 ("naturalmonatsbeitrag3","Text35"),
    D_NATURALHATANGEHOERIGEREINNAMEN_NEIN3 ("naturalhatangehoerigereinnamennein3", "Kontrollkästchen13"),
    D_NATURALHATANGEHOERIGEREINNAMEN_JA3 ("naturalhatangehoerigereinnamenja3", "Kontrollkästchen14"),
    D_NATURALEINNAMENANGEHOERIGER3 ("naturaleinnamenangehoeriger3", "Text36"),
    D_NATURALVOLLSTAENDIGERNAME4 ("naturalvollstaendigername4","Text38"),
    D_NATURALSTRASSE4 ("naturalstrasse4","Text38"),
    D_NATURALPLZ4 ("naturalplz4","Text38"),
    D_NATURALORT4 ("naturalort4","Text38"),
    D_NATURALGEBURSTDATUM4 ("naturalgeburtsdatum4","Text39"),
    D_NATURALVERHAELTNIS4 ("naturalverhaeltnis4","Text40"),
    D_NATURALMONATSBETRAG4 ("naturalmonatsbeitrag4","Text41"),
    D_NATURALHATANGEHOERIGEREINNAMEN_NEIN4 ("naturalhatangehoerigereinnamennein4","Kontrollkästchen15"),
    D_NATURALHATANGEHOERIGEREINNAMEN_JA4 ("naturalhatangehoerigereinnamenja4","Kontrollkästchen16"),
    D_NATURALEINNAMENANGEHOERIGER4 ("naturaleinnamenangehoeriger4","Text42"),

    //Form E
    E_NSELBSTARBEITNEIN("NSelbstarbeitnein", "TKontrollkästchen17"),
    E_NSELBSTARBEITJA("NSelbstarbeitja", "Kontrollkästchen18"),
    E_NSELBSTARBEITBETRAG("NSelbstarbeitbetrag", "Text44"),
    E_NSELBSTARBEITEHENEIN("nselbstarbeitehenein", "Kontrollkästchen43"),
    E_NSELBSTARBEITEHEJA("nselbstarbeiteheja", "Kontrollkästchen44"),
    E_NSELBSTARBEITEHEBETRAG("nselbstarbeitehebetrag", "Text72"),
    E_UNTERHALTNEIN("unterhaltnein", "Kontrollkästchen19"),
    E_UNTERHALTJA("unterhaltja", "Kontrollkästchen20"),
    E_UNTERHALTBETRAG("unterhaltbetrag", "Text46"),
    E_UNTERHALTEHENEIN("unterhaltehenein", "Kontrollkästchen45"),
    E_UNTERHALTEHEJA("unterhalteheja", "Kontrollkästchen46"),
    E_UNTERHALTEHEBETRAG("unterhaltehebetrag", "Text74"),
    E_SELBSTARBEITNEIN("selbstarbeitnein", "Kontrollkästchen21"),
    E_SELBSTARBEITJA("selbstarbeitja", "Kontrollkästchen22"),
    E_SELBSTARBEITBETRAG("selbstarbeitbetrag", "Text48"),
    E_SELBSTARBEITEHENEIN("selbstarbeitehenein", "Kontrollkästchen47"),
    E_SELBSTARBEITEHEJA("selbstarbeiteheja", "Kontrollkästchen48"),
    E_SELBSTARBEITEHEBETRAG("selbstarbeitehebetrag", "Text76"),
    E_PENSIONNEIN("pensionnein", "Kontrollkästchen23"),
    E_PENSIONJA("pensionja", "Kontrollkästchen24"),
    E_PENSIONBETRAG("pensionbetrag", "Text50"),
    E_PENSIONEHENEIN("pensionehenein", "Kontrollkästchen49"),
    E_PENSIONEHEJA("pensioneheja", "Kontrollkästchen50"),
    E_PENSIONEHEBETRAG("pensionehebetrag", "Text78"),
    E_VERPACHTUNGNEIN("verpachtungnein", "Kontrollkästchen25"),
    E_VERPACHTUNGJA("verpachtungja", "Kontrollkästchen26"),
    E_VERPACHTUNGBETRAG("verpachtungbetrag", "Text52"),
    E_VERPACHTUNGEHENEIN("verpachtungehenein", "Kontrollkästchen51"),
    E_VERPACHTUNGEHEJA("verpachtungeheja", "Kontrollkästchen52"),
    E_VERPACHTUNGEHEBETRAG("verpachtungehebetrag", "Text80"),
    E_ARBEITSLOSENGELD1NEIN("arbeitslosengeld1nein", "Kontrollkästchen27"),
    E_ARBEITSLOSENGELD1JA("arbeitslosengeld1ja", "Kontrollkästchen28"),
    E_ARBEITSLOSENGELD1BETRAG("arbeitslosengeld1betrag", "Text54"),
    E_ARBEITSLODENGELD1EHENEIN("arbeitslosengeld1ehenein", "Kontrollkästchen53"),
    E_ARBEITSLODENGELD1EHEJA("arbeitslosengeld1eheja", "Kontrollkästchen54"),
    E_ARBEITSLODENGELD1EHEBETRAG("arbeitslosengeld1ehebetrag", "Text82"),
    E_KAPITALVERMOEGENNEIN("kapitalvermoegennein", "Kontrollkästchen29"),
    E_KAPITALVERMOEGENJA("kapitalvermoegenja", "Kontrollkästchen30"),
    E_KAPITALVERMOEGENBETRAG("kapitalvermoegenbetrag", "Text56"),
    E_KAPITALVERMOEGENEHENEIN("kapitalvermoegenehenein", "Kontrollkästchen55"),
    E_KAPITALVERMOEGENEHEJA("kapitalvermoegeneheja", "Kontrollkästchen56"),
    E_KAPITALVERMOEGENEHEBETRAG("kapitalvermoegenehebetrag", "Text84"),
    E_ARBEITSLOSENGELD2NEIN("arbeitslosengeld2nein", "Kontrollkästchen31"),
    E_ARBEITSLOSENGELD2JA("arbeitslosengeld2ja", "Kontrollkästchen32"),
    E_ARBEITSLOSENGELD2BETRAG("arbeitslosengeld2betrag", "Text58"),
    E_ARBEITSLODENGELD2EHENEIN("arbeitslosengeld2ehenein", "Kontrollkästchen57"),
    E_ARBEITSLODENGELD2EHEJA("arbeitslosengeld2eheja", "Kontrollkästchen58"),
    E_ARBEITSLODENGELD2EHEBETRAG("arbeitslosengeld2ehebetrag", "Text86"),
    E_KINDERGELDNEIN("kindergeldnein", "Kontrollkästchen33"),
    E_KINDERGELDJA("kindergeldja", "Kontrollkästchen34"),
    E_KINDERGELDBETRAG("kindergeldbetrag", "Text60"),
    E_KINDERGELDEHENEIN("kindergeldehenein", "Kontrollkästchen59"),
    E_KINDERGELDEHEJA("kindergeldeheja", "Kontrollkästchen60"),
    E_KINDERGELDEHEBETRAG("kindergeldehebetrag", "Text88"),
    E_KRANKENGELDNEIN("krankengeldnein", "Kontrollkästchen35"),
    E_KRANKENGELDJA("krankengeldja", "Kontrollkästchen36"),
    E_KRANKENGELDBETRAG("krankengeldbetrag", "Text62"),
    E_KRANKENGELDEHENEIN("krankengeldehenein", "Kontrollkästchen61"),
    E_KRANKENGELDEHEJA("krankengeldeheja", "Kontrollkästchen62"),
    E_KRANKENGELDEHEBETRAG("krankengeldehebetrag", "Text90"),
    E_WOHNGELDNEIN("wohngeldnein", "Kontrollkästchen37"),
    E_WOHNGELDJA("wohngeldja", "Kontrollkästchen38"),
    E_WOHNGELDBETRAG("wohngeldbetrag", "Text64"),
    E_WOHNGELDEHENEIN("wohngeldehenein", "Kontrollkästchen63"),
    E_WOHNGELDEHEJA("wohngeldeheja", "Kontrollkästchen64"),
    E_WOHNGELDEHEBETRAG("wohngeldehebetrag", "Text92"),
    E_ELTERNGELDNEIN("elterngeldnein", "Kontrollkästchen39"),
    E_ELTERNGELDJA("elterngeldeheja", "Kontrollkästchen40"),
    E_ELTERNGELDBETRAG("elterngeldbetrag", "Text66"),
    E_ELTERNGELDEHENEIN("elterngeldehenein", "Kontrollkästchen65"),
    E_ELTERNGELDEHEJA("elterngeldeheja", "Kontrollkästchen66"),
    E_ELTERNGELDEHEBETRAG("elterngeldehebetrag", "Text94"),
    E_WEINNAHMENNEIN("weinnahmennein", "Kontrollkästchen41"),
    E_WEINNAHMENJA("weinnahmenja", "Kontrollkästchen42"),
    E_WEINNAHMENART("weinnahmenart", "Text68a"),
    E_WEINNAHMENBETRAG("weinnahmenbetrag", "Text68"),
    E_WEINNAHMENART1("weinnahmenart1", "Text70a"),
    E_WEINNAHMENBETRAG1("weinnahmenbetrag1", "Text70"),
    E_WEINNAHMENEHENEIN("weinnahmenehenein", "Kontrollkästchen68"),
    E_WEINNAHMENEHEJA("weinnahmeneheja", "Kontrollkästchen68"),
    E_WEINNAHMENEHEART("weinnahmeneheart", "Text96"),
    E_WEINNAHMENEHEBETRAG("weinnahmenehebetrag", "Text97"),
    E_WEINNAHMENEHEART1("weinnahmeneheart1", "Text99"),
    E_WEINNAHMENEHEBETRAG1("weinnahmenehebetrag1", "Text100"),

    //Form F
    F_STEUERN("bankkonto", "Text102"),
    F_STEUERNBETRAG("steuernbetrag", "Text103"),
    F_STEUERNEHE("steuernehe", "Text105"),
    F_STEUERNEHEBETRAG("steuernehebetrag", "Text106"),
    F_SOZIALVERSICHERUNG("sozialversicherung", "Text108"),
    F_SOZIALVERSICHERUNGBETRAG("sozialversicherungbetrag", "Text109"),
    F_SOZIALVERSICHERUNGEHE("sozialversicherungehe", "Text111"),
    F_SOZIALVERSICHERUNGEHEBETRAG("sozialversicherungehebetrag", "Text112"),
    F_SONSTVERSICHERUNG("sonstversicherung", "Text114"),
    F_SONSTVERSICHERUNGBETRAG("sonstversicherungbetrag", "Text115"),
    F_SONSTVERSICHERUNGEHE("sonstversicherungehe", "Text117"),
    F_SONSTVERSICHERUNGEHEBETRAG("sonstversicherungehebetrag", "Text118"),
    F_FAHRTKOSTEN("sonstwerbung", "Text120"),
    F_FAHRTKOSTENBETRAG("sonstwerbungbetrag", "Text121"),
    F_FAHRTKOSTENEHE("sonstwerbungehe", "Text123"),
    F_FAHRTKOSTENEHEBETRAG("sonstwerbungehebetrag", "Text124"),
    F_SONSTWERBUNG("sonstwerbung", "Text126"),
    F_SONSTWERBUNGBETRAG("sonstwerbungbetrag", "Text127"),
    F_SONSTWERBUNGEHE("sonstwerbungehe", "Text129"),
    F_SONSTWERBUNGEHEBETRAG("sonstwerbungehebetrag", "Text130"),

    //Form G
    G_BANKKONTONEIN("bankkontonein", "Kontrollkästchen103"),
    G_BANKKONTOJA("bankkontoja", "Kontrollkästchen104"),
    G_BANKKONTO("bankkonto", "Text132"),
    G_BANKKONTOSTAND("bankkontostand", "Text133"),
    G_GRUNDEIGENTUMNEIN ("grundeigentumnein", "Kontrollkästchen105"),
    G_GRUNDEIGENTUMJA ("grundeigentumja", "Kontrollkästchen106"),
    G_GRUNDEIGENTUM ("grundeigentum", "Text135"),
    G_GRUNDEIGENTUMSWERT ("grundeigentumswert", "Text136"),
    G_KRAFTFAHRZEUGNEIN("kraftfahrzeugnein", "Kontrollkästchen107"),
    G_KRAFTFAHRZEUGJA("kraftfahrzeugja", "Kontrollkästchen108"),
    G_KRAFTFAHRZEUG("kraftfahrzeug", "Text138"),
    G_KRAFTFAHRZEUGWERT("kraftfahrzeugwert", "Text139"),
    G_BARGELDNEIN("bargeldnein", "Kontrollkästchen109"),
    G_BARGELDJA("bargeldja", "Kontrollkästchen110"),
    G_BARGELD("bargeld", "Text141"),
    G_BARGELDWERT("bargeldwert", "Text142"),
    G_LVERSICHERUNGNEIN("lversicherungnein", "Kontrollkästchen111"),
    G_LVERSICHERUNGJA("lversicherungja", "Kontrollkästchen112"),
    G_LVERSICHERUNG("lversicherung", "Text144"),
    G_LVERSICHERUNGSWERT("lversicherungswert", "Text145"),
    G_SONSTVERMOEGENNEIN("sonstvermoegennein","Kontrollkästchen113"),
    G_SONSTVERMOEGENJA("sonstvermoegenja","Kontrollkästchen114"),
    G_SONSTVERMOEGEN("sonstvermoegen","Text147"),
    G_SONSTVERMOEGENSWERT("sonstvermoegenswert","Text148"),

    //Form H
    H_WOHNRAUMGROESSE("wohnraumgroesse", "Text150"),
    H_ANZAHLZIMMER ("anzahlzimmer", "Text152"),
    H_PERSONEIMWOHNRAUM("personenimwohnraum", "Text153" ),
    H_MIETERNEIN("mieternein", "Kontrollkästchen115" ),
    H_MIETERJA("mieterja", "Kontrollkästchen116" ),
    H_KALTMIETE("kaltmiete", "Text156" ),
    H_HEIZUNGSKOSTEN("heizungskosten", "Text157" ),
    H_UEBRIGENEBENKOSTEN("uebrigenebenkosten", "Text158" ),
    H_GESAMTBETRAG("gesamtbetrag", "Text159" ),
    H_ALLEINE("alleine", "Text159a" ),
    H_EIGENTUEMERNEIN("eigentuemernein", "Kontrollkästchen117" ),
    H_EIGENTUEMERJA("eigentuemerja", "Kontrollkästchen118" ),
    H_TILGUNG("Tilgung", "Text162" ),
    H_HEIZUNGSKOSTEN1("heizungskosten1", "Text163" ),
    H_UEBRIGENEBENKOSTEN1("uebrigenebenkosten1", "Text164" ),
    H_GESAMTBETRAG1("gesamtbetrag1", "Text165" ),
    H_ALLEINE1("alleine1", "Text166" ),
    H_DAHRLEHENSBEZEICHNUNG("darlehensbezeichnung","Text168"),
    H_RESTSCHULD("restschuld", "Text169" ),
    H_ZINSEN("ZINSEN", "Text170" ),
    H_DAHRLEHENSBEZEICHNUNG1("darlehensbezeichnung1","Text172"),
    H_RESTSCHULD1("restschuld1", "Text173" ),
    H_ZINSEN1("ZINSEN1", "Text174" ),

    //Form I
    I_ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG ("zahlungsverpflichtungbezeichnung", "Text176"),
    I_ZAHLUNGSVERPFLICHTUNGRESTSCHULD ("zahlungsverpflichtungrestschuld", "177"),
    I_ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG ("zahlungsverpflichtunggesamtbelastung", "178"),
    I_ZAHLUNGSVERPFLICHTUNGALLEINE ("zahlungsverpflichtungalleine", "179"),
    I_ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG1 ("zahlungsverpflichtungbezeichnung1", "181"),
    I_ZAHLUNGSVERPFLICHTUNGRESTSCHULD1 ("zahlungsverpflichtungrestschuld1", "182"),
    I_ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG1 ("zahlungsverpflichtunggesamtbelastung1", "183"),
    I_ZAHLUNGSVERPFLICHTUNGALLEINE1 ("zahlungsverpflichtungalleine1", "184"),
    I_ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG2 ("zahlungsverpflichtungbezeichnung2", "187"),
    I_ZAHLUNGSVERPFLICHTUNGRESTSCHULD2 ("zahlungsverpflichtungrestschuld2", "188"),
    I_ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG2 ("zahlungsverpflichtunggesamtbelastung2", "189"),
    I_ZAHLUNGSVERPFLICHTUNGALLEINE2 ("zahlungsverpflichtungalleine2", "190"),

    //Form J
    J_BELASTUNGBEZEICHNUNG ("belastungsbezeichnung", "Text191"),
    J_ICHALLEINZAHLE ("ichalleinezahle", "Text192"),
    J_BELASTUNGBEZEICHNUNG1 ("belastungsbezeichnung1", "Text194"),
    J_ICHALLEINZAHLE1 ("ichalleinezahle1", "Text195");

    private final String code;
    private final String description;
    private static final Map<String, String> mMap = Collections.unmodifiableMap(initializeMapping());

    Fields(String code, String description) {
        this.code = code;
        this.description = description;
    }

    public String getCode() {
        return code;
    }

    public String getDescription() {
        return description;
    }


    public static String getDescriptionByCode(String code) {
        return mMap.get(code);
    }

    private static Map<String, String> initializeMapping() {
        Map<String, String> map = new HashMap<>();
        for (Fields s : Fields.values()) {
            map.put(s.code, s.description);
        }
        return map;
    }
}
