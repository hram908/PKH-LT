package pkh.form;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import pkh.form.materials.PkhFormular;
import pkh.form.pdfConverter.FillFormular;
import pkh.form.pdfConverter.LinkCreator;

import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * @author Thomas
 */
public class PdfConverterService {
    private static PDDocument _pdfDocument;

    private static final String VORLAGE = "pkh_formular_vorlage.pdf";

    /**
     * Befüllung und Generierung des PDF Formulars
     *
     * Am Ende wird der Downloadlink gesetzt, der anschließend vom FormularController an den Client zurückgesendet wird
     *
     * @param formular ist das vom Client übertragene PkhFormular
     */
    public void erzeugePdf(PkhFormular formular) {
        if (formular.getFormA().getAntragsteller().getNachname().equals("")) {
            formular.getFormA().getAntragsteller().setNachname("test2");
            formular.getFormA().getAntragsteller().setVorname("test");
            formular.getFormA().getAntragsteller().setGeburtsname("test3");
            formular.getFormA().getAntragsteller().setStrasse("teststraße");
            formular.getFormA().getGesetzVertreter().setVertreterName("testVertreter");
        }
        String fileName = erzeugeDateinamen(formular.getFormA().getAntragsteller().getNachname());

        try {
            _pdfDocument = ladePdfDatei(VORLAGE);

            // Rufe die Formularbefüllung auf
            FillFormular formularBefuellung = new FillFormular();
            formularBefuellung.befuellePdf(_pdfDocument, formular);

            // TODO: Implementiere Bearbeitung
            // _pdfDocument.addPage(new PDPage());
            // TODO ENDE Bearbeitung

            speicherNeuePdfDatei(_pdfDocument, fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }

        LinkCreator.setDownloadLink(LinkCreator.erzeugeDownloadLink(fileName));
    }



    private static void gebeFeldnamenAus() throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        List<PDField> fields = acroForm.getFields();

        for (PDField field: fields) {
            System.out.println("Feldname: " + field.getPartialName() + "\n");
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
}
