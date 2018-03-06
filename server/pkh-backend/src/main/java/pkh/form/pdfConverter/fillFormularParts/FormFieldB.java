package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.b.Versicherung;
import pkh.form.pdfConverter.materials.Fields;
import pkh.form.pdfConverter.FillFormularHelper;

import java.io.IOException;
import java.util.List;

public class FormFieldB {
    public static List<String> FillB(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) throws IOException {
        if (pkhFormular.getFormB().isHatRechtschutzversicherung()) {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.B_RECHTSCHUTZ_JA.getDescription());
        } else {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.B_RECHTSCHUTZ_NEIN.getDescription());
        }

        if (pkhFormular.getFormB().isHatKostentraeger()) {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.B_MITGLIEDSCHAFT_JA.getDescription());
        } else {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.B_MITGLIEDSCHAFT_NEIN.getDescription());
        }

        // TODO: Korrekte Befüllung implementieren
        // Höhe der Übernahme
        String hoheUebernahme = pkhFormular.getFormB().getUebernahme();
        FillFormularHelper.setFieldTo(pdfDocument, Fields.B_HOEHE.getDescription(), "TEST");
        // Versicherer
        StringBuilder alleVersicherer = new StringBuilder();
        for (Versicherung versicherer: pkhFormular.getFormB().getVersicherung()) {
            alleVersicherer.append(versicherer.getVersicherung()).append(", ");
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.B_BEZEICHNUNG_TRAEGER.getDescription(), alleVersicherer.toString());


        if (!pkhFormular.getNotiz().getB().getNotiz().equals("") || !pkhFormular.getNotiz().getB().getHinweis().equals("")) {
            noteList.add("Abschnitt B:");
            if (!pkhFormular.getNotiz().getB().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getB().getNotiz());
            }
            if (!pkhFormular.getNotiz().getB().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getB().getNotiz());
            }
        }
        return noteList;
    }
}
