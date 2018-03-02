package pkh.form;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.interactive.annotation.PDAnnotation;
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

            // PDPage page = _pdfDocument.getPage(5);



            // TODO ENDE Bearbeitung
            speicherNeuePdfDatei(_pdfDocument, fileName);
        } catch (IOException e) {
            e.printStackTrace();
        }

        setDownloadLink(erzeugeDownloadLink(fileName));
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
}
