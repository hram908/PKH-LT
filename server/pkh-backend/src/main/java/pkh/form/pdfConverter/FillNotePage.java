package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import pkh.form.materials.PkhFormular;

import java.io.IOException;
import java.util.List;

public class FillNotePage {

    public static void addEmptyPage(PDDocument pdfDocument) {
        Integer numPages = pdfDocument.getNumberOfPages();
        Integer newPageNumber = numPages + 1;
        pdfDocument.addPage(new PDPage());
    }

    public static void writeNotesToPage(PDDocument pdfDocument, List<String> form) throws IOException {
        PDFont font = PDType1Font.HELVETICA_BOLD;

        Integer numPages = pdfDocument.getNumberOfPages() - 1;
        // Start a new content stream which will "hold" the to be created content
        PDPageContentStream contentStream = new PDPageContentStream(pdfDocument, pdfDocument.getPage(numPages));

        // Define a text content stream using the selected font, moving the cursor and drawing the text "Hello World"
        contentStream.beginText();
        contentStream.newLineAtOffset(30, 650);
        contentStream.setFont( font, 12 );
        contentStream.setLeading(14.5f);
        contentStream.showText(form.get(0));
        font = PDType1Font.HELVETICA;
        contentStream.setFont( font, 12 );
        for (String sentence: form) {
            if (!sentence.equals(form.get(0))) {
                contentStream.newLine();
                contentStream.showText(sentence);
            }
        }

        contentStream.endText();

        // Make sure that the content stream is closed:
        contentStream.close();
    }
}
