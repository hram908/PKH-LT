package pkh.form.common;

public class LinkCreatorService {
    private static String downloadLink;

    public static String erzeugeDownloadLink(String fileName) {
        return fileName;
    }

    public static String getDownloadLink() {
        return downloadLink;
    }

    public static void setDownloadLink(String _downloadLink) {
        downloadLink = _downloadLink;
    }
}
