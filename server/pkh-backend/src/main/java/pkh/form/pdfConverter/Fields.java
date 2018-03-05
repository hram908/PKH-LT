package pkh.form.pdfConverter;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

enum Fields {
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
    BEZEICHNUNG_TRAEGER("bezeichnung_traeger", "Text9");

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

