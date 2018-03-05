package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDCheckBox;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;
import pkh.form.materials.PkhFormular;
import pkh.form.materials.abschnitte.a.Antragsteller;
import pkh.form.materials.abschnitte.a.GesetzVertreter;

import java.io.IOException;

public class FillFormular {
    private static PDDocument _pdfDocument;

    public void befuellePdf(PDDocument aktuellePdf, PkhFormular pkhFormular) throws IOException {
        _pdfDocument = aktuellePdf;

        formFelderA(pkhFormular);
        formFelderB(pkhFormular);
        formFelderC(pkhFormular);
    }

    private void formFelderC(PkhFormular pkhFormular) {

    }

    private void formFelderB(PkhFormular pkhFormular) throws IOException {
        if (pkhFormular.getFormB().isHatRechtschutzversicherung()) {
            setzeCheckBox(Fields.RECHTSCHUTZ_JA.getDescription());
        } else {
            setzeCheckBox(Fields.RECHTSCHUTZ_NEIN.getDescription());
        }

        if (pkhFormular.getFormB().isHatKostentraeger()) {
            setzeCheckBox(Fields.MITGLIEDSCHAFT_JA.getDescription());
        } else {
            setzeCheckBox(Fields.MITGLIEDSCHAFT_NEIN.getDescription());
        }
        // Höhe der Übernahme
        String hoheUebernahme = pkhFormular.getFormB().getUebernahme();
        setzeFeldAuf(Fields.HOEHE.getDescription(), "TEST");
        // Versicherer
        StringBuilder alleVersicherer = new StringBuilder();
        for (String versicherer: pkhFormular.getFormB().getVersicherung()) {
            alleVersicherer.append(versicherer).append(", ");
        }
        setzeFeldAuf(Fields.BEZEICHNUNG_TRAEGER.getDescription(), alleVersicherer.toString());
    }

    // Befüllt den kompletten Abschnitt A
    private void formFelderA(PkhFormular pkhFormular) throws IOException {
        Antragsteller antragsteller = pkhFormular.getFormA().getAntragsteller();
        GesetzVertreter gesetzVertreter = pkhFormular.getFormA().getGesetzVertreter();

        // Namensfeld
        String vollstaendigerName = antragsteller.getNachname() + " " + antragsteller.getVorname();
        if (!antragsteller.getGeburtsname().equals("")) {
            vollstaendigerName += " (geboren " + antragsteller.getGeburtsname() + ")";
        }
        setzeFeldAuf(Fields.NAME.getDescription(), vollstaendigerName);
        // Berufsfeld
        String beruf = antragsteller.getErwerbstaetigkeit();
        if (!antragsteller.getBeruf().equals("")) {
            beruf += " " + antragsteller.getBeruf();
        }
        setzeFeldAuf(Fields.BERUF.getDescription(), beruf);
        // Geburtsdatum
        setzeFeldAuf(Fields.GEBURTSDATUM.getDescription(), antragsteller.getGeburtstag());
        // Familienstand
        setzeFeldAuf(Fields.FAMILIENSTAND.getDescription(), antragsteller.getFamilienstand());

        // Anschrift
        String anschrift = antragsteller.getStrasse() + " " + antragsteller.getHausnummer() + ",  " + antragsteller.getPlz() + " " + antragsteller.getOrt();
        setzeFeldAuf(Fields.ADRESSE.getDescription(), anschrift);

        // Telefonnummer
        setzeFeldAuf(Fields.TELEFON.getDescription(), antragsteller.getTelefon());

        // Prüfe ob Gesetzlicher Vertreter vohanden ist
        if (gesetzVertreter.isHatGesetzlichenVertreter()) {
            // Führe Gesetzlichen Vertreter zusammen
            // Name
            String gesVertreter = gesetzVertreter.getVertreterName() + " " + gesetzVertreter.getVertreterVorname() + ", ";
            // Adresse
            gesVertreter = gesetzVertreter.getVertreterStrasse() + " " + gesetzVertreter.getVertreterHausnummer() + ", " + gesetzVertreter.getVertreterPlz() + " " + gesetzVertreter.getVertreterOrt();
            // Telefon
            if (!gesetzVertreter.getVertreterTelefon().equals("")) {
                gesVertreter = gesetzVertreter.getVertreterTelefon();
            }
            setzeFeldAuf(Fields.GES_VERTRETER.getDescription(), gesVertreter);
        }
    }

    private static void erweitereTextInFeld(String name, String value) throws IOException {
        PDField field = visiereFeldAn(name);
        if (field != null) {
            field.setValue(field.getValueAsString() + " " + value);
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    private static void setzeFeldAuf(String name, String value) throws IOException {
        PDField field = visiereFeldAn(name);
        if (field != null) {
            field.setValue(value);
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    private static void setzeCheckBox(String name) throws IOException {
        PDCheckBox field = visiereCheckBoxAn(name);
        if (field != null) {
            field.check();
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    private static PDField visiereFeldAn(String name) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        return acroForm.getField(name);
    }

    private static PDCheckBox visiereCheckBoxAn(String name) throws IOException {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        return (PDCheckBox) acroForm.getField(name);
    }
}
