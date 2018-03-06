package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;

import java.util.List;

public class FormFieldE {
    public static List<String> FillE(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {

        if (!pkhFormular.getNotiz().getE().getNotiz().equals("") || !pkhFormular.getNotiz().getE().getHinweis().equals("")) {

            noteList.add("Abschnitt E:");
            if (!pkhFormular.getNotiz().getE().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getE().getNotiz());
            }
            if (!pkhFormular.getNotiz().getE().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getE().getNotiz());
            }
        }
        return noteList;
    }
}
