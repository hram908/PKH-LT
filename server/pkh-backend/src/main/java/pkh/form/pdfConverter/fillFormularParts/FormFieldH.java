package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;

import java.util.List;

public class FormFieldH {
    public static List<String> FillH(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {

        if (!pkhFormular.getNotiz().getH().getNotiz().equals("") || !pkhFormular.getNotiz().getH().getHinweis().equals("")) {

            noteList.add("Abschnitt H:");
            if (!pkhFormular.getNotiz().getH().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getH().getNotiz());
            }
            if (!pkhFormular.getNotiz().getH().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getH().getNotiz());
            }
        }
        return noteList;
    }
}
