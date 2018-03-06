package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentCatalog;
import org.apache.pdfbox.pdmodel.interactive.form.PDAcroForm;
import org.apache.pdfbox.pdmodel.interactive.form.PDCheckBox;
import org.apache.pdfbox.pdmodel.interactive.form.PDField;

import java.io.IOException;

public class FillFormularHelper {
    public static void addTextToField(PDDocument _pdfDocument, String name, String value) throws IOException {
        PDField field = targetField(_pdfDocument, name);
        if (field != null) {
            field.setValue(field.getValueAsString() + " " + value);
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    public static void setFieldTo(PDDocument _pdfDocument, String name, String value) throws IOException {
        PDField field = targetField(_pdfDocument, name);
        if (field != null) {
            field.setValue(value);
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    public static void setCheckBox(PDDocument _pdfDocument, String name) throws IOException {
        PDCheckBox field = targetCheckBox(_pdfDocument, name);
        if (field != null) {
            field.check();
        } else {
            System.err.println("No field found with name:" + name);
        }
    }

    private static PDField targetField(PDDocument _pdfDocument, String name) {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        return acroForm.getField(name);
    }

    private static PDCheckBox targetCheckBox(PDDocument _pdfDocument, String name) {
        PDDocumentCatalog docCatalog = _pdfDocument.getDocumentCatalog();
        PDAcroForm acroForm = docCatalog.getAcroForm();
        return (PDCheckBox) acroForm.getField(name);
    }
}
