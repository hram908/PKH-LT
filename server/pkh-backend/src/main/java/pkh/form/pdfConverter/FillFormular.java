package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.pdfConverter.fillFormularParts.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class FillFormular {

    public void befuellePdf(PDDocument aktuellePdf, PkhFormular pkhFormular) throws IOException {
        FormFieldA.FillA(aktuellePdf, pkhFormular);
        FormFieldB.FillB(aktuellePdf, pkhFormular);
        FormFieldC.FillC(aktuellePdf, pkhFormular);
        FormFieldD.FillD(aktuellePdf, pkhFormular);
        FormFieldE.FillE(aktuellePdf, pkhFormular);
        FormFieldF.FillF(aktuellePdf, pkhFormular);
        FormFieldG.FillG(aktuellePdf, pkhFormular);
        FormFieldH.FillH(aktuellePdf, pkhFormular);
        FormFieldI.FillI(aktuellePdf, pkhFormular);
        FormFieldJ.FillJ(aktuellePdf, pkhFormular);

        FillNotePage.addEmptyPage(aktuellePdf);
        List<String> bla = new ArrayList<>();
        bla.add("Abschnitt B:");
        bla.add("Dieser Abschnitt ist noch nicht fertig");
        bla.add("Es wird daran gearbeitet");
        FillNotePage.writeNotesToPage(aktuellePdf, bla);
    }
}
