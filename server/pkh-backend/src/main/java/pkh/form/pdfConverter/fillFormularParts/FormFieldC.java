package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.c.Verpflichteter;
import pkh.form.pdfConverter.FillFormularHelper;
import pkh.form.pdfConverter.materials.Fields;

import java.io.IOException;
import java.util.List;

public class FormFieldC {
    public static List<String> FillC(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) throws IOException {
        // Befülle das Formular nach den Eingaben
        if (pkhFormular.getFormC().isHatUnterhaltsanspruch()) {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.C_HATUNTERHALTSANSPRUCHJA.getDescription());
            StringBuilder verpflichtetePersonen = new StringBuilder();
            for (Verpflichteter verpflichteter:  pkhFormular.getFormC().getVerpflichteter()) {
                verpflichtetePersonen.append(verpflichteter.getVerpflichteter());
            }
            FillFormularHelper.setFieldTo(pdfDocument, Fields.C_UNTERHALTSVERPFLICHTETER.getDescription(), verpflichtetePersonen.toString());
        } else {
            FillFormularHelper.setCheckBox(pdfDocument, Fields.C_HATUNTERHALTSANSPRUCHNEIN.getDescription());
        }

        // Füge im Falle von Notizen oder Hinweisen diese dem Notizzettel hinzu
        if (!pkhFormular.getNotiz().getC().getNotiz().equals("") || !pkhFormular.getNotiz().getC().getHinweis().equals("")) {

            noteList.add("Abschnitt C:");
            if (!pkhFormular.getNotiz().getC().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getC().getNotiz());
            }
            if (!pkhFormular.getNotiz().getC().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getC().getNotiz());
            }
        }
        return noteList;
    }
}
