package pkh.form.pdfConverter.materials;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public enum Fields {
    // Form A
    NAME("name", "Text1"),
    BERUF("beruf", "Text2"),
    GEBURTSDATUM("geburtsdatum", "Text3"),
    FAMILIENSTAND("familienstand", "Text4"),
    ADRESSE("adresse", "Text5"),
    TELEFON("telefon", "Text6"),
    GES_VERTRETER("ges_vertreter", "Text7"),

    // Form B
    RECHTSCHUTZ_NEIN("rechtschutz_nein", "Kontrollkästchen1"),
    RECHTSCHUTZ_JA("rechtschutz_ja", "Kontrollkästchen2"),
    HOEHE("hoehe", "Text8"),
    MITGLIEDSCHAFT_NEIN("mitgliedschaft_nein", "Kontrollkästchen3"),
    MITGLIEDSCHAFT_JA("mitgliedschaft_ja", "Kontrollkästchen4"),
    BEZEICHNUNG_TRAEGER("bezeichnung_traeger", "Text9"),


    //Form C
    HATUNTERHALTSANSPRUCHNEIN ("hatunterhaltsanspruchnein", "Kontrollkästchen5"),
    HATUNTERHALTSANSPRUCHJA ("hatunterhalsanspruchja", "Kontrollkästchen6"),
    UNTERHALTSVERPFLICHTETER ("unterhaltsverpflichteter", "Text12"),


    //Form D
    NATURALVOLLSTAENDIGERNAME ("naturalvollstaendigername","Text14"),
    NATURALSTRASSE ("naturalstrasse","Text14"),
    NATURALPLZ ("naturalplz","Text14"),
    NATURALORT ("naturalort","Text14"),
    NATURALGEBURSTDATUM ("naturalgeburtsdatum","Text15"),
    NATURALVERHAELTNIS ("naturalverhaeltnis","Text16"),
    NATURALMONATSBETRAG ("naturalmonatsbeitrag","Text17"),
    NATURALHATANGEHOERIGEREINNAMENNEIN ("naturalhatangehoerigereinnamennein","Kontrollkästchen7"),
    NATURALHATANGEHOERIGEREINNAMENJA ("naturalhatangehoerigereinnamenja","Kontrollkästchen8"),
    NATURALEINNAMENANGEHOERIGER ("naturaleinnamenangehoeriger","Text18"),

    NATURALVOLLSTAENDIGERNAME1 ("naturalvollstaendigername1","Text20"),
    NATURALSTRASSE1 ("naturalstrasse1","Text20"),
    NATURALPLZ1 ("naturalplz1","Text20"),
    NATURALORT1 ("naturalort1","Text20"),
    NATURALGEBURSTDATUM1 ("naturalgeburtsdatum1","Text21"),
    NATURALVERHAELTNIS1 ("naturalverhaeltnis1","Text22"),
    NATURALMONATSBETRAG1 ("naturalmonatsbeitrag1","Text23"),
    NATURALHATANGEHOERIGEREINNAMENNEIN1 ("naturalhatangehoerigereinnamennein1","Kontrollkästchen9"),
    NATURALHATANGEHOERIGEREINNAMENJA1 ("naturalhatangehoerigereinnamenja1","Kontrollkästchen10"),
    NATURALEINNAMENANGEHOERIGER1 ("naturaleinnamenangehoeriger1","Text24"),

    NATURALVOLLSTAENDIGERNAME2 ("naturalvollstaendigername2","Text26"),
    NATURALSTRASSE2 ("naturalstrasse2","Text26"),
    NATURALPLZ2 ("naturalplz2","Text26"),
    NATURALORT2 ("naturalort2","Text26"),
    NATURALGEBURSTDATUM2 ("naturalgeburtsdatum2","Text27"),
    NATURALVERHAELTNIS2 ("naturalverhaeltnis2","Text28"),
    NATURALMONATSBETRAG2 ("naturalmonatsbeitrag2","Text29"),
    NATURALHATANGEHOERIGEREINNAMENNEIN2 ("naturalhatangehoerigereinnamennein2","Kontrollkästchen11"),
    NATURALHATANGEHOERIGEREINNAMENJA2 ("naturalhatangehoerigereinnamenja2","Kontrollkästchen12"),
    NATURALEINNAMENANGEHOERIGER2 ("naturaleinnamenangehoeriger2","Text30"),

    NATURALVOLLSTAENDIGERNAME3 ("naturalvollstaendigername3","Text32"),
    NATURALSTRASSE3 ("naturalstrasse3","Text32"),
    NATURALPLZ3 ("naturalplz3","Text32"),
    NATURALORT3 ("naturalort3","Text32"),
    NATURALGEBURSTDATUM3 ("naturalgeburtsdatum3","Text33"),
    NATURALVERHAELTNIS3 ("naturalverhaeltnis3","Text34"),
    NATURALMONATSBETRAG3 ("naturalmonatsbeitrag3","Text35"),
    NATURALHATANGEHOERIGEREINNAMEN_NEIN3 ("naturalhatangehoerigereinnamennein3", "Kontrollkästchen13"),
    NATURALHATANGEHOERIGEREINNAMEN_JA3 ("naturalhatangehoerigereinnamenja3", "Kontrollkästchen14"),
    NATURALEINNAMENANGEHOERIGER3 ("naturaleinnamenangehoeriger3", "Text36"),

    NATURALVOLLSTAENDIGERNAME4 ("naturalvollstaendigername4","Text38"),
    NATURALSTRASSE4 ("naturalstrasse4","Text38"),
    NATURALPLZ4 ("naturalplz4","Text38"),
    NATURALORT4 ("naturalort4","Text38"),
    NATURALGEBURSTDATUM4 ("naturalgeburtsdatum4","Text39"),
    NATURALVERHAELTNIS4 ("naturalverhaeltnis4","Text40"),
    NATURALMONATSBETRAG4 ("naturalmonatsbeitrag4","Text41"),
    NATURALHATANGEHOERIGEREINNAMEN_NEIN4 ("naturalhatangehoerigereinnamennein4","Kontrollkästchen15"),
    NATURALHATANGEHOERIGEREINNAMEN_JA4 ("naturalhatangehoerigereinnamenja4","Kontrollkästchen16"),
    NATURALEINNAMENANGEHOERIGER4 ("naturaleinnamenangehoeriger4","Text42"),

    //Form E
    NSELBSTARBEITNEIN("NSelbstarbeitnein", "TKontrollkästchen17"),
    NSELBSTARBEITJA("NSelbstarbeitja", "Kontrollkästchen18"),
    NSELBSTARBEITBETRAG("NSelbstarbeitbetrag", "Text44"),
    NSELBSTARBEITEHENEIN("nselbstarbeitehenein", "Kontrollkästchen43"),
    NSELBSTARBEITEHEJA("nselbstarbeiteheja", "Kontrollkästchen44"),
    NSELBSTARBEITEHEBETRAG("nselbstarbeitehebetrag", "Text72"),
    UNTERHALTNEIN("unterhaltnein", "Kontrollkästchen19"),
    UNTERHALTJA("unterhaltja", "Kontrollkästchen20"),
    UNTERHALTBETRAG("unterhaltbetrag", "Text46"),
    UNTERHALTEHENEIN("unterhaltehenein", "Kontrollkästchen45"),
    UNTERHALTEHEJA("unterhalteheja", "Kontrollkästchen46"),
    UNTERHALTEHEBETRAG("unterhaltehebetrag", "Text74"),
    SELBSTARBEITNEIN("selbstarbeitnein", "Kontrollkästchen21"),
    SELBSTARBEITJA("selbstarbeitja", "Kontrollkästchen22"),
    SELBSTARBEITBETRAG("selbstarbeitbetrag", "Text48"),
    SELBSTARBEITEHENEIN("selbstarbeitehenein", "Kontrollkästchen47"),
    SELBSTARBEITEHEJA("selbstarbeiteheja", "Kontrollkästchen48"),
    SELBSTARBEITEHEBETRAG("selbstarbeitehebetrag", "Text76"),
    PENSIONNEIN("pensionnein", "Kontrollkästchen23"),
    PENSIONJA("pensionja", "Kontrollkästchen24"),
    PENSIONBETRAG("pensionbetrag", "Text50"),
    PENSIONEHENEIN("pensionehenein", "Kontrollkästchen49"),
    PENSIONEHEJA("pensioneheja", "Kontrollkästchen50"),
    PENSIONEHEBETRAG("pensionehebetrag", "Text78"),
    VERPACHTUNGNEIN("verpachtungnein", "Kontrollkästchen25"),
    VERPACHTUNGJA("verpachtungja", "Kontrollkästchen26"),
    VERPACHTUNGBETRAG("verpachtungbetrag", "Text52"),
    VERPACHTUNGEHENEIN("verpachtungehenein", "Kontrollkästchen51"),
    VERPACHTUNGEHEJA("verpachtungeheja", "Kontrollkästchen52"),
    VERPACHTUNGEHEBETRAG("verpachtungehebetrag", "Text80"),
    ARBEITSLOSENGELD1NEIN("arbeitslosengeld1nein", "Kontrollkästchen27"),
    ARBEITSLOSENGELD1JA("arbeitslosengeld1ja", "Kontrollkästchen28"),
    ARBEITSLOSENGELD1BETRAG("arbeitslosengeld1betrag", "Text54"),
    ARBEITSLODENGELD1EHENEIN("arbeitslosengeld1ehenein", "Kontrollkästchen53"),
    ARBEITSLODENGELD1EHEJA("arbeitslosengeld1eheja", "Kontrollkästchen54"),
    ARBEITSLODENGELD1EHEBETRAG("arbeitslosengeld1ehebetrag", "Text82"),
    KAPITALVERMOEGENNEIN("kapitalvermoegennein", "Kontrollkästchen29"),
    KAPITALVERMOEGENJA("kapitalvermoegenja", "Kontrollkästchen30"),
    KAPITALVERMOEGENBETRAG("kapitalvermoegenbetrag", "Text56"),
    KAPITALVERMOEGENEHENEIN("kapitalvermoegenehenein", "Kontrollkästchen55"),
    KAPITALVERMOEGENEHEJA("kapitalvermoegeneheja", "Kontrollkästchen56"),
    KAPITALVERMOEGENEHEBETRAG("kapitalvermoegenehebetrag", "Text84"),
    ARBEITSLOSENGELD2NEIN("arbeitslosengeld2nein", "Kontrollkästchen31"),
    ARBEITSLOSENGELD2JA("arbeitslosengeld2ja", "Kontrollkästchen32"),
    ARBEITSLOSENGELD2BETRAG("arbeitslosengeld2betrag", "Text58"),
    ARBEITSLODENGELD2EHENEIN("arbeitslosengeld2ehenein", "Kontrollkästchen57"),
    ARBEITSLODENGELD2EHEJA("arbeitslosengeld2eheja", "Kontrollkästchen58"),
    ARBEITSLODENGELD2EHEBETRAG("arbeitslosengeld2ehebetrag", "Text86"),
    KINDERGELDNEIN("kindergeldnein", "Kontrollkästchen33"),
    KINDERGELDJA("kindergeldja", "Kontrollkästchen34"),
    KINDERGELDBETRAG("kindergeldbetrag", "Text60"),
    KINDERGELDEHENEIN("kindergeldehenein", "Kontrollkästchen59"),
    KINDERGELDEHEJA("kindergeldeheja", "Kontrollkästchen60"),
    KINDERGELDEHEBETRAG("kindergeldehebetrag", "Text88"),
    KRANKENGELDNEIN("krankengeldnein", "Kontrollkästchen35"),
    KRANKENGELDJA("krankengeldja", "Kontrollkästchen36"),
    KRANKENGELDBETRAG("krankengeldbetrag", "Text62"),
    KRANKENGELDEHENEIN("krankengeldehenein", "Kontrollkästchen61"),
    KRANKENGELDEHEJA("krankengeldeheja", "Kontrollkästchen62"),
    KRANKENGELDEHEBETRAG("krankengeldehebetrag", "Text90"),
    WOHNGELDNEIN("wohngeldnein", "Kontrollkästchen37"),
    WOHNGELDJA("wohngeldja", "Kontrollkästchen38"),
    WOHNGELDBETRAG("wohngeldbetrag", "Text64"),
    WOHNGELDEHENEIN("wohngeldehenein", "Kontrollkästchen63"),
    WOHNGELDEHEJA("wohngeldeheja", "Kontrollkästchen64"),
    WOHNGELDEHEBETRAG("wohngeldehebetrag", "Text92"),
    ELTERNGELDNEIN("elterngeldnein", "Kontrollkästchen39"),
    ELTERNGELDJA("elterngeldeheja", "Kontrollkästchen40"),
    ELTERNGELDBETRAG("elterngeldbetrag", "Text66"),
    ELTERNGELDEHENEIN("elterngeldehenein", "Kontrollkästchen65"),
    ELTERNGELDEHEJA("elterngeldeheja", "Kontrollkästchen66"),
    ELTERNGELDEHEBETRAG("elterngeldehebetrag", "Text94"),
    WEINNAHMENNEIN("weinnahmennein", "Kontrollkästchen41"),
    WEINNAHMENJA("weinnahmenja", "Kontrollkästchen42"),
    WEINNAHMENART("weinnahmenart", "Text68a"),
    WEINNAHMENBETRAG("weinnahmenbetrag", "Text68"),
    WEINNAHMENART1("weinnahmenart1", "Text70a"),
    WEINNAHMENBETRAG1("weinnahmenbetrag1", "Text70"),
    WEINNAHMENEHENEIN("weinnahmenehenein", "Kontrollkästchen68"),
    WEINNAHMENEHEJA("weinnahmeneheja", "Kontrollkästchen68"),
    WEINNAHMENEHEART("weinnahmeneheart", "Text96"),
    WEINNAHMENEHEBETRAG("weinnahmenehebetrag", "Text97"),
    WEINNAHMENEHEART1("weinnahmeneheart1", "Text99"),
    WEINNAHMENEHEBETRAG1("weinnahmenehebetrag1", "Text100"),

    //Form F
    STEUERN("bankkonto", "Text102"),
    STEUERNBETRAG("steuernbetrag", "Text103"),
    STEUERNEHE("steuernehe", "Text105"),
    STEUERNEHEBETRAG("steuernehebetrag", "Text106"),
    SOZIALVERSICHERUNG("sozialversicherung", "Text108"),
    SOZIALVERSICHERUNGBETRAG("sozialversicherungbetrag", "Text109"),
    SOZIALVERSICHERUNGEHE("sozialversicherungehe", "Text111"),
    SOZIALVERSICHERUNGEHEBETRAG("sozialversicherungehebetrag", "Text112"),
    SONSTVERSICHERUNG("sonstversicherung", "Text114"),
    SONSTVERSICHERUNGBETRAG("sonstversicherungbetrag", "Text115"),
    SONSTVERSICHERUNGEHE("sonstversicherungehe", "Text117"),
    SONSTVERSICHERUNGEHEBETRAG("sonstversicherungehebetrag", "Text118"),
    FAHRTKOSTEN("sonstwerbung", "Text120"),
    FAHRTKOSTENBETRAG("sonstwerbungbetrag", "Text121"),
    FAHRTKOSTENEHE("sonstwerbungehe", "Text123"),
    FAHRTKOSTENEHEBETRAG("sonstwerbungehebetrag", "Text124"),
    SONSTWERBUNG("sonstwerbung", "Text126"),
    SONSTWERBUNGBETRAG("sonstwerbungbetrag", "Text127"),
    SONSTWERBUNGEHE("sonstwerbungehe", "Text129"),
    SONSTWERBUNGEHEBETRAG("sonstwerbungehebetrag", "Text130"),

    //Form G
    BANKKONTONEIN("bankkontonein", "Kontrollkästchen103"),
    BANKKONTOJA("bankkontoja", "Kontrollkästchen104"),
    BANKKONTO("bankkonto", "Text132"),
    BANKKONTOSTAND("bankkontostand", "Text133"),
    GRUNDEIGENTUMNEIN ("grundeigentumnein", "Kontrollkästchen105"),
    GRUNDEIGENTUMJA ("grundeigentumja", "Kontrollkästchen106"),
    GRUNDEIGENTUM ("grundeigentum", "Text135"),
    GRUNDEIGENTUMSWERT ("grundeigentumswert", "Text136"),
    KRAFTFAHRZEUGNEIN("kraftfahrzeugnein", "Kontrollkästchen107"),
    KRAFTFAHRZEUGJA("kraftfahrzeugja", "Kontrollkästchen108"),
    KRAFTFAHRZEUG("kraftfahrzeug", "Text138"),
    KRAFTFAHRZEUGWERT("kraftfahrzeugwert", "Text139"),
    BARGELDNEIN("bargeldnein", "Kontrollkästchen109"),
    BARGELDJA("bargeldja", "Kontrollkästchen110"),
    BARGELD("bargeld", "Text141"),
    BARGELDWERT("bargeldwert", "Text142"),
    LVERSICHERUNGNEIN("lversicherungnein", "Kontrollkästchen111"),
    LVERSICHERUNGJA("lversicherungja", "Kontrollkästchen112"),
    LVERSICHERUNG("lversicherung", "Text144"),
    LVERSICHERUNGSWERT("lversicherungswert", "Text145"),
    SONSTVERMOEGENNEIN("sonstvermoegennein","Kontrollkästchen113"),
    SONSTVERMOEGENJA("sonstvermoegenja","Kontrollkästchen114"),
    SONSTVERMOEGEN("sonstvermoegen","Text147"),
    SONSTVERMOEGENSWERT("sonstvermoegenswert","Text148"),

    //Form H
    WOHNRAUMGROESSE("wohnraumgroesse", "Text150"),
    ANZAHLZIMMER ("anzahlzimmer", "Text152"),
    PERSONEIMWOHNRAUM("personenimwohnraum", "Text153" ),
    MIETERNEIN("mieternein", "Kontrollkästchen115" ),
    MIETERJA("mieterja", "Kontrollkästchen116" ),
    KALTMIETE("kaltmiete", "Text156" ),
    HEIZUNGSKOSTEN("heizungskosten", "Text157" ),
    UEBRIGENEBENKOSTEN("uebrigenebenkosten", "Text158" ),
    GESAMTBETRAG("gesamtbetrag", "Text159" ),
    ALLEINE("alleine", "Text159a" ),
    EIGENTUEMERNEIN("eigentuemernein", "Kontrollkästchen117" ),
    EIGENTUEMERJA("eigentuemerja", "Kontrollkästchen118" ),
    TILGUNG("Tilgung", "Text162" ),
    HEIZUNGSKOSTEN1("heizungskosten1", "Text163" ),
    UEBRIGENEBENKOSTEN1("uebrigenebenkosten1", "Text164" ),
    GESAMTBETRAG1("gesamtbetrag1", "Text165" ),
    ALLEINE1("alleine1", "Text166" ),
    DAHRLEHENSBEZEICHNUNG("darlehensbezeichnung","Text168"),
    RESTSCHULD("restschuld", "Text169" ),
    ZINSEN("ZINSEN", "Text170" ),
    DAHRLEHENSBEZEICHNUNG1("darlehensbezeichnung1","Text172"),
    RESTSCHULD1("restschuld1", "Text173" ),
    ZINSEN1("ZINSEN1", "Text174" ),

    //Form I
    ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG ("zahlungsverpflichtungbezeichnung", "Text176"),
    ZAHLUNGSVERPFLICHTUNGRESTSCHULD ("zahlungsverpflichtungrestschuld", "177"),
    ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG ("zahlungsverpflichtunggesamtbelastung", "178"),
    ZAHLUNGSVERPFLICHTUNGALLEINE ("zahlungsverpflichtungalleine", "179"),
    ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG1 ("zahlungsverpflichtungbezeichnung1", "181"),
    ZAHLUNGSVERPFLICHTUNGRESTSCHULD1 ("zahlungsverpflichtungrestschuld1", "182"),
    ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG1 ("zahlungsverpflichtunggesamtbelastung1", "183"),
    ZAHLUNGSVERPFLICHTUNGALLEINE1 ("zahlungsverpflichtungalleine1", "184"),
    ZAHLUNGSVERPFLICHTUNGBEZEICHNUNG2 ("zahlungsverpflichtungbezeichnung2", "187"),
    ZAHLUNGSVERPFLICHTUNGRESTSCHULD2 ("zahlungsverpflichtungrestschuld2", "188"),
    ZAHLUNGSVERPFLICHTUNGGESAMTBELASTUNG2 ("zahlungsverpflichtunggesamtbelastung2", "189"),
    ZAHLUNGSVERPFLICHTUNGALLEINE2 ("zahlungsverpflichtungalleine2", "190"),

    //Form J
    BELASTUNGBEZEICHNUNG ("belastungsbezeichnung", "Text191"),
    ICHALLEINZAHLE ("ichalleinezahle", "Text192"),
    BELASTUNGBEZEICHNUNG1 ("belastungsbezeichnung1", "Text194"),
    ICHALLEINZAHLE1 ("ichalleinezahle1", "Text195");


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

