package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;

import java.util.List;

public class FormFieldD {
    public static List<String> FillD(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {

        if (!pkhFormular.getNotiz().getD().getNotiz().equals("") || !pkhFormular.getNotiz().getD().getHinweis().equals("")) {

            noteList.add("Abschnitt D:");
            if (!pkhFormular.getNotiz().getD().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getD().getNotiz());
            }
            if (!pkhFormular.getNotiz().getD().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getD().getNotiz());
            }
        }
        return noteList;
    }
}
