package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.j.Belastung;

import java.util.List;

public class FormFieldJ {
    public static List<String> FillJ(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {


        noteList.add("Abschnitt J:");
        if (!pkhFormular.getNotiz().getJ().getNotiz().equals("")) {
            noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getJ().getNotiz());
        }
        if (!pkhFormular.getNotiz().getJ().getHinweis().equals("")) {
            noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getJ().getNotiz());
        }
        if (pkhFormular.getFormJ().isHatBesondereBelastungen()) {
            for (Belastung belastung : pkhFormular.getFormJ().getBesondereBelastungen()) {
                noteList.add("Art der Belastung: " + belastung.getBeschreibung());
                noteList.add("Höhe der Zahlung: " + belastung.getAlleinigeZahlung());
            }
        }
        return noteList;
    }
}
