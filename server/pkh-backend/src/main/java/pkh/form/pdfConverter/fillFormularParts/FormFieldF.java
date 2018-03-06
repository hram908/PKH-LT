package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;

import java.util.List;

public class FormFieldF {
    public static List<String> FillF(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {

        if (!pkhFormular.getNotiz().getF().getNotiz().equals("") || !pkhFormular.getNotiz().getF().getHinweis().equals("")) {

            noteList.add("Abschnitt F:");
            if (!pkhFormular.getNotiz().getF().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getF().getNotiz());
            }
            if (!pkhFormular.getNotiz().getF().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getF().getNotiz());
            }
        }
        return noteList;
    }
}
