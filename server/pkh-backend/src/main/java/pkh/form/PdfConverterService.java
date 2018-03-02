package pkh.form;

import pkh.form.materials.PkhFormular;

/**
 * @author Thomas
 */
public class PdfConverterService {
    private static String SERVERLINK = "http://ltdemos.informatik.uni-hamburg.de/pkh-backend/pdf/";

    private String downloadLink;

    /**
     * Befüllung und Generierung des PDF Formulars
     *
     * Am Ende wird der Downloadlink gesetzt, der anschließend vom FormularController an den Client zurückgesendet wird
     *
     * @param formular ist das vom Client übertragene PkhFormular
     */
    public void erzeugePdf(PkhFormular formular) {
        String fileName = "test";
        // TODO: implementiere die Generierung der PDF Datei

        // TODO: implementiere die Generierung des Downloadlinks
        setDownloadLink(erzeugeDownloadLink(fileName));
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
