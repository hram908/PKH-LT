package pkh.form.pdfConverter.fillFormularParts;

import org.apache.pdfbox.pdmodel.PDDocument;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.a.Antragsteller;
import pkh.form.materials.abschnitte.a.GesetzVertreter;
import pkh.form.pdfConverter.materials.Fields;
import pkh.form.pdfConverter.FillFormularHelper;

import java.io.IOException;
import java.util.List;

public class FormFieldA {
    // Befüllt den kompletten Abschnitt A
    public static List<String> FillA(PDDocument pdfDocument, PkhFormular pkhFormular, List<String> noteList) throws IOException {
        Antragsteller antragsteller = pkhFormular.getFormA().getAntragsteller();
        GesetzVertreter gesetzVertreter = pkhFormular.getFormA().getGesetzVertreter();

        // Namensfeld
        String vollstaendigerName = antragsteller.getNachname() + ", " + antragsteller.getVorname();
        if (!antragsteller.getGeburtsname().equals("")) {
            vollstaendigerName += " (geboren " + antragsteller.getGeburtsname() + ")";
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_NAME.getDescription(), vollstaendigerName);
        // Berufsfeld
        String beruf = antragsteller.getErwerbstaetigkeit();
        if (!antragsteller.getBeruf().equals("")) {
            beruf += " (" + antragsteller.getBeruf() + ")";
        }
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_BERUF.getDescription(), beruf);
        // Geburtsdatum
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_GEBURTSDATUM.getDescription(), antragsteller.getGeburtstag());
        // Familienstand
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_FAMILIENSTAND.getDescription(), antragsteller.getFamilienstand());

        // Anschrift
        String anschrift = antragsteller.getStrasse() + " " + antragsteller.getHausnummer() + ",  " + antragsteller.getPlz() + " " + antragsteller.getOrt();
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_ADRESSE.getDescription(), anschrift);

        // Telefonnummer
        FillFormularHelper.setFieldTo(pdfDocument, Fields.A_TELEFON.getDescription(), ", TEL: " + antragsteller.getTelefon());

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
            FillFormularHelper.setFieldTo(pdfDocument, Fields.A_GES_VERTRETER.getDescription(), gesVertreter);
        }

        if (!pkhFormular.getNotiz().getA().getNotiz().equals("") || !pkhFormular.getNotiz().getA().getHinweis().equals("")) {
            noteList.add("Abschnitt A:");
            if (!pkhFormular.getNotiz().getA().getNotiz().equals("")) {
                noteList.add("Notiz des Kunden: " + pkhFormular.getNotiz().getA().getNotiz());
            }
            if (!pkhFormular.getNotiz().getA().getHinweis().equals("")) {
                noteList.add("Hinweis für den Sachbearbeiter: " + pkhFormular.getNotiz().getA().getNotiz());
            }
        }
        return noteList;
    }
}
