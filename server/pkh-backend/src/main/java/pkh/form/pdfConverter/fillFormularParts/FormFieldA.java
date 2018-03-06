package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.a.Antragsteller;
import pkh.form.materials.abschnitte.a.GesetzVertreter;
import pkh.form.pdfConverter.materials.Fields;
import pkh.form.pdfConverter.FillFormularHelper;

import java.io.IOException;

public class FormFieldA {
    // Befüllt den kompletten Abschnitt A
    public static void FillA(PDDocument pdfDocument, PkhFormular pkhFormular) throws IOException {
        Antragsteller antragsteller = pkhFormular.getFormA().getAntragsteller();
        GesetzVertreter gesetzVertreter = pkhFormular.getFormA().getGesetzVertreter();

        // Namensfeld
        String vollstaendigerName = antragsteller.getNachname() + ", " + antragsteller.getVorname();
        if (!antragsteller.getGeburtsname().equals("")) {
            vollstaendigerName += " (geboren " + antragsteller.getGeburtsname() + ")";
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.NAME.getDescription(), vollstaendigerName);
        // Berufsfeld
        String beruf = antragsteller.getErwerbstaetigkeit();
        if (!antragsteller.getBeruf().equals("")) {
            beruf += " (" + antragsteller.getBeruf() + ")";
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.BERUF.getDescription(), beruf);
        // Geburtsdatum
        FillFormularHelper.setFieldTo(pdfDocument, Fields.GEBURTSDATUM.getDescription(), antragsteller.getGeburtstag());
        // Familienstand
        FillFormularHelper.setFieldTo(pdfDocument, Fields.FAMILIENSTAND.getDescription(), antragsteller.getFamilienstand());

        // Anschrift
        String anschrift = antragsteller.getStrasse() + " " + antragsteller.getHausnummer() + ",  " + antragsteller.getPlz() + " " + antragsteller.getOrt();
        FillFormularHelper.setFieldTo(pdfDocument, Fields.ADRESSE.getDescription(), anschrift);

        // Telefonnummer
        FillFormularHelper.setFieldTo(pdfDocument, Fields.TELEFON.getDescription(), antragsteller.getTelefon());

        // Prüfe ob Gesetzlicher Vertreter vohanden ist
        if (gesetzVertreter.isHatGesetzlichenVertreter()) {
            // Führe Gesetzlichen Vertreter zusammen
            // Name
            String gesVertreter = String.format("%s %s, ", gesetzVertreter.getVertreterName(), gesetzVertreter.getVertreterVorname());
            // Adresse
            gesVertreter += gesetzVertreter.getVertreterStrasse() + " " + gesetzVertreter.getVertreterHausnummer() + ", " + gesetzVertreter.getVertreterPlz() + " " + gesetzVertreter.getVertreterOrt();
            // Telefon
            if (!gesetzVertreter.getVertreterTelefon().equals("")) {
                gesVertreter += gesetzVertreter.getVertreterTelefon();
            }
            FillFormularHelper.setFieldTo(pdfDocument, Fields.GES_VERTRETER.getDescription(), gesVertreter);
        }
    }
}
