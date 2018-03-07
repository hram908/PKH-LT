package pkh.form.common;

public class LinkCreatorService {
    private static String downloadLink;

    public static String erzeugeDownloadLink(String fileName) {
        return "./pdf?fileName=" + fileName;
    }

    public static String getDownloadLink() {
        return downloadLink;
    }

    public static void setDownloadLink(String _downloadLink) {
        downloadLink = _downloadLink;
    }
}
