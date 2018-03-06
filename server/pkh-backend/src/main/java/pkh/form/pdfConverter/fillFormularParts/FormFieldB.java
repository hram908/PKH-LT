package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.pdfConverter.materials.Fields;
import pkh.form.pdfConverter.FillFormularHelper;

import java.io.IOException;

public class FormFieldB {
    public static void FillB(PDDocument pdfDocument, PkhFormular pkhFormular) throws IOException {
        if (pkhFormular.getFormB().isHatRechtschutzversicherung()) {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.RECHTSCHUTZ_JA.getDescription());
        } else {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.RECHTSCHUTZ_NEIN.getDescription());
        }

        if (pkhFormular.getFormB().isHatKostentraeger()) {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.MITGLIEDSCHAFT_JA.getDescription());
        } else {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.MITGLIEDSCHAFT_NEIN.getDescription());
        }

        // TODO: Korrekte Befüllung implementieren
        // Höhe der Übernahme
        String hoheUebernahme = pkhFormular.getFormB().getUebernahme();
        FillFormularHelper.setFieldTo(pdfDocument, Fields.HOEHE.getDescription(), "TEST");
        // Versicherer
        StringBuilder alleVersicherer = new StringBuilder();
        for (String versicherer: pkhFormular.getFormB().getVersicherung()) {
            alleVersicherer.append(versicherer).append(", ");
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.BEZEICHNUNG_TRAEGER.getDescription(), alleVersicherer.toString());
    }
}
