package pkh.form;

import pkh.form.materials.PkhFormular;

public class PdfConverterService {
    private String downloadLink;

    public void erzeugePdf(PkhFormular formular) {

        // TODO: implementiere die Generierung der PDF Datei

        // TODO: implementiere die Generierung des Downloadlinks
        String downloadLink = "Downloadlink";
        setDownloadLink(downloadLink);
    }

    public String getDownloadLink() {
        return downloadLink;
    }

    private void setDownloadLink(String downloadLink) {
        this.downloadLink = downloadLink;
    }
}
