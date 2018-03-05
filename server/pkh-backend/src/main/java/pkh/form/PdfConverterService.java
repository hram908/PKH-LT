package pkh.form;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import pkh.form.materials.PkhFormular;

import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * @author Thomas
 */
public class PdfConverterService {
    private static String SERVERLINK = "http://ltdemos.informatik.uni-hamburg.de/pkh-backend/pdf/";
    private static PDDocument _pdfDocument;
    private PkhFormular _formular;

    private static final String VORLAGE = "pkh_formular_vorlage.pdf";

    private String downloadLink;

    /**
     * Befüllung und Generierung des PDF Formulars
     *
     * Am Ende wird der Downloadlink gesetzt, der anschließend vom FormularController an den Client zurückgesendet wird
     *
     * @param formular ist das vom Client übertragene PkhFormular
     */
    public void erzeugePdf(PkhFormular formular) {
        if (formular.getFormA().getAntragsteller().getNachname().equals("")) {
            formular.getFormA().getAntragsteller().setNachname("test");
        }
        String fileName = erzeugeDateinamen(formular.getFormA().getAntragsteller().getNachname());

        try {
            _pdfDocument = ladePdfDatei(VORLAGE);
            // TODO: Implementiere Bearbeitung


            _pdfDocument.addPage(new PDPage());

            // System.out.println("Anzahl Seiten: " + _pdfDocument.getNumberOfPages());
            // gebeFeldnamenAus();
            String test0 = Felder.getDescriptionByCode("wohnraumgroesse");
            erweitereTextInFeld(test0, "150");
            String test1 = Felder.getDescriptionByCode("anzahlzimmer");
            erweitereTextInFeld(test1, "152");
            String test2 = Felder.getDescriptionByCode("personenimwohnraum");
            erweitereTextInFeld(test2, "153");
            String test3 = Felder.getDescriptionByCode("kaltmiete");
            erweitereTextInFeld(test3, "156");
            String test4 = Felder.getDescriptionByCode("heizungskosten");
            erweitereTextInFeld(test4, "157");
            String test5 = Felder.getDescriptionByCode("uebrigenebenkosten");
            erweitereTextInFeld(test5, "158");
            String test6 = Felder.getDescriptionByCode("gesamtbetrag");
            erweitereTextInFeld(test6, "159");
            String test7 = Felder.getDescriptionByCode("alleine");
            erweitereTextInFeld(test7, "160");
            String test8 = Felder.getDescriptionByCode("Tilgung");
            erweitereTextInFeld(test8, "163");
            String test9 = Felder.getDescriptionByCode("Heizungskosten2");
            erweitereTextInFeld(test9, "164");
            String test10 = Felder.getDescriptionByCode("uebrigenebenkosten1");
            erweitereTextInFeld(test10, "165");
            String test11 = Felder.getDescriptionByCode("gesamtbetrag1");
            erweitereTextInFeld(test11, "166");
            String test12 = Felder.getDescriptionByCode("alleine1");
            erweitereTextInFeld(test12, "167");
            String test13 = Felder.getDescriptionByCode("darlehensbezeichnung");
            erweitereTextInFeld(test13, "169");
            String test14 = Felder.getDescriptionByCode("restschuld");
            erweitereTextInFeld(test14, "170");
            String test15 = Felder.getDescriptionByCode("ZINSEN");
            erweitereTextInFeld(test15, "171");
            String test16 = Felder.getDescriptionByCode("darlehensbezeichnung1");
            erweitereTextInFeld(test16, "173");
            String test17 = Felder.getDescriptionByCode("restschuld1");
            erweitereTextInFeld(test17, "174");
            String test18 = Felder.getDescriptionByCode("ZINSEN1");
            erweitereTextInFeld(test18, "175");






            // erweitereTextInFeld(test, "Testnachname");
            /*String test = Felder.getDescriptionByCode("vorname");
            System.out.println(" Text1(\"vorname\"): " + test);
            // cd cPDPage page = _pdfDocument.getPage(5);
            erweitereTextInFeld("vorname", "Testvorname");
            erweitereTextInFeld(test, "Testnachname");*/



            // TODO ENDE Bearbeitung
            speicherNeuePdfDatei(_pdfDocument, fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }

        setDownloadLink(erzeugeDownloadLink(fileName));
    }

    private static void gebeFeldnamenAus() throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        List<PDField> fields = acroForm.getFields();

        for (PDField field: fields) {
            System.out.println("Feldflags: " + field.getFieldFlags() + " | Feldname: " + field.getPartialName() + "\n");
        }
    }

    public static void erweitereTextInFeld(String name, String value) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        PDField field = acroForm.getField( name );
        if( field != null ) {
            field.setValue(field.getValueAsString() + " " + value);
        }
        else {
            System.err.println( "No field found with name:" + name );
        }
    }

    public static void setzeFeldAuf(String name, String value) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        PDField field = acroForm.getField( name );
        if( field != null ) {
            field.setValue(value);
        }
        else {
            System.err.println( "No field found with name:" + name );
        }
    }

    private static PDDocument ladePdfDatei(String originalPdf) throws IOException {
        return PDDocument.load(new File(originalPdf));
    }

    private static void speicherNeuePdfDatei(PDDocument aktuellePdf, String dateiName) throws IOException {
        aktuellePdf.save(dateiName);
        _pdfDocument.close();
    }

    private String erzeugeDateinamen(String nachname) {
        Integer id = new Random().nextInt(1000);
        return "pkh_formular_" + nachname + "_" + id + ".pdf";
    }

    private String erzeugeDownloadLink(String fileName) {
        return SERVERLINK + fileName;
    }

    public String getDownloadLink() {
        return downloadLink;
    }

    private void setDownloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
    }

    public enum Felder {
        // Form A
        NAME("name", "Text159"),
        //ADRESSE("adresse", "Text5");
         ADRESSE ("adresse", "Text166"),

        //Form H
        WOHNRAUMGROESSE("wohnraumgroesse", "Text150"),
        ANZAHLZIMMER ("anzahlzimmer", "Text152"),
        PERSONEIMWOHNRAUM("personenimwohnraum", "Text153" ),
        KALTMIETE("kaltmiete", "Text156" ),
        HEIZUNGSKOSTEN("heizungskosten", "Text157" ),
        UEBRIGENEBENKOSTEN("uebrigenebenkosten", "Text158" ),
        GESAMTBETRAG("gesamtbetrag", "Text159" ),
        ALLEINE("alleine", "Text160" ),
        TILGUNG("Tilgung", "Text163" ),
        HEIZUNGSKOSTEN1("heizungskosten2", "Text164" ),
        UEBRIGENEBENKOSTEN1("uebrigenebenkosten1", "Text165" ),
        GESAMTBETRAG1("gesamtbetrag1", "Text166" ),
        ALLEINE1("alleine1", "Text167" ),
        DAHRLEHENSBEZEICHNUNG("darlehensbezeichnung","Text169"),
        RESTSCHULD("restschuld", "Text170" ),
        ZINSEN("ZINSEN", "Text171" ),
        DAHRLEHENSBEZEICHNUNG1("darlehensbezeichnung1","Text173"),
        RESTSCHULD1("restschuld1", "Text174" ),
        ZINSEN1("ZINSEN1", "Text175" );



        private final String code;
        private final String description;
        private static final Map<String, String> mMap = Collections.unmodifiableMap(initializeMapping());

        Felder(String code, String description) {
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
            for (Felder s : Felder.values()) {
                map.put(s.code, s.description);
            }
            return map;
        }
    }
}
