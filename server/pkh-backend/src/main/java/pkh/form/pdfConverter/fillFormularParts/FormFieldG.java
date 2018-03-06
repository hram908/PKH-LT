package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;

import java.util.List;

public class FormFieldG {
    public static List<String> FillG(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {

        if (!pkhFormular.getNotiz().getG().getNotiz().equals("") || !pkhFormular.getNotiz().getG().getHinweis().equals("")) {

            noteList.add("Abschnitt G:");
            if (!pkhFormular.getNotiz().getG().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getG().getNotiz());
            }
            if (!pkhFormular.getNotiz().getG().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getG().getNotiz());
            }
        }
        return noteList;
    }
}
