package pkh.form;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import pkh.form.fileManager.FileService;
import pkh.form.materials.PkhFormular;
import pkh.form.pdfConverter.FillFormular;
import pkh.form.common.LinkCreatorService;

import java.io.File;
import java.io.IOException;
import java.util.*;

/**
 * @author Thomas
 */
public class PdfConverterService {
    private static PDDocument _pdfDocument;

    private final String TEMPLATE;
    private final String PATH;

    PdfConverterService() {
        // Lokal
        TEMPLATE = "pkh_formular_vorlage.pdf";
        PATH = "";
        // Server
        // TEMPLATE = this.getClass().getResource("/pkh_formular_vorlage.pdf").getPath();
        // PATH = VORLAGE.substring(0, VORLAGE.lastIndexOf("/")) + "/";
    }

    /**
     * Befüllung und Generierung des PDF Formulars
     * <p>
     * Am Ende wird der Downloadlink gesetzt, der anschließend vom FormularController an den Client zurückgesendet wird
     *
     * @param formular ist das vom Client übertragene PkhFormular
     */
    public void createPdf(PkhFormular formular) {
        String fileName = createFileName(formular.getFormA().getAntragsteller().getNachname());

        try {
            _pdfDocument = loadPdfFile(TEMPLATE);

            // Rufe die Formularbefüllung auf
            FillFormular formularBefuellung = new FillFormular();
            formularBefuellung.befuellePdf(_pdfDocument, formular);

            saveNewPdfFile(_pdfDocument, fileName);
            _pdfDocument.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        LinkCreatorService.setDownloadLink(LinkCreatorService.erzeugeDownloadLink(fileName));
    }

    private static void printFieldNames() throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        List<PDField> fields = acroForm.getFields();

        for (PDField field : fields) {
            System.out.println("Feldname: " + field.getPartialName() + "\n");
        }
    }

    private static PDDocument loadPdfFile(String originalPdf) throws IOException {
        return PDDocument.load(new File(originalPdf));
    }

    private void saveNewPdfFile(PDDocument aktuellePdf, String dateiName) throws IOException {
        aktuellePdf.save(dateiName);
        _pdfDocument.close();
        FileService.addFileName(PATH, dateiName);
        FileService.checkFileForOldEntries(PATH);
    }

    private String createFileName(String nachname) {
        Integer id = new Random().nextInt(1000);
        return PATH + "pkh_formular_" + nachname + "_" + id + ".pdf";
    }
}
