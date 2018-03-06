package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.i.Schulden;

import java.util.List;

public class FormFieldI {
    public static List<String> FillI(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) {


        // Zusammensetzung der Zahlungsverpflichtungen für Formular I als Notiz
        noteList.add("Abschnitt I:");
        if (!pkhFormular.getNotiz().getI().getNotiz().equals("")) {
            noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getI().getNotiz());
        }
        if (!pkhFormular.getNotiz().getI().getHinweis().equals("")) {
            noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getI().getNotiz());
        }
        if (pkhFormular.getFormI().isHatZahlungsverpflichtungen()) {
            for (Schulden verpflichtung : pkhFormular.getFormI().getZahlungsverpflichtungen()) {
                noteList.add("Art der Schulden: " + verpflichtung.getBeschreibung());
                noteList.add("Restschuld: " + verpflichtung.getRestschuld() + "€, Monatliche Belastung: " + verpflichtung.getGesamtbelastungMtl()
                        + "€, Getätigte Zahlungen" + verpflichtung.getAlleinigeZahlung() + "€");
            }
        }
        return noteList;
    }
}
