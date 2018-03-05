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
            String test = Felder.getDescriptionByCode("vorname");
            System.out.println(" Text1(\"vorname\"): " + test);
            // cd cPDPage page = _pdfDocument.getPage(5);
            erweitereTextInFeld("vorname", "Testvorname");
            erweitereTextInFeld(test, "Testnachname");



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
        VORNAME("vorname", "Text1"),
        NACHNAME("nachname", "Text1"),
        ADRESSE("adresse", "Text5");


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
