package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.pdfConverter.fillFormularParts.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FillFormular {

    public void befuellePdf(PDDocument aktuellePdf, PkhFormular pkhFormular) throws IOException {
        List<String> noteList = new ArrayList<>();

        noteList = FormFieldA.FillA(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldB.FillB(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldC.FillC(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldD.FillD(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldE.FillE(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldF.FillF(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldG.FillG(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldH.FillH(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldI.FillI(aktuellePdf, pkhFormular, noteList);
        noteList = FormFieldJ.FillJ(aktuellePdf, pkhFormular, noteList);

        FillNotePage.writeNotesToPage(aktuellePdf, noteList);
    }
}
