package pkh.form.pdfConverter;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.interactive.documentnavigation.destination.PDPageFitHeightDestination;
import org.apache.pdfbox.util.Matrix;
import pkh.form.materials.PkhFormular;

import java.io.IOException;
import java.util.List;

public class FillNotePage {
    /**
     * Method to write all given notes at the end of the formular. it adds pages automatically
     *
     * @param pdfDocument the pdf document you are working on
     * @param form the list of entries you want to have on a additional page
     * @throws IOException
     */
    public static void writeNotesToPage(PDDocument pdfDocument, List<String> form) throws IOException {
        // add a new empty page
        pdfDocument.addPage(new PDPage());
        // add a title for the new page at first entry of 'form'
        form.add(0, "Notizen - Seite ");

        // counts the succeeded entries of form
        Integer rowCounter = 0;

        // get the latest page
        Integer numPages = pdfDocument.getNumberOfPages() - 1;
        // target the new page
        PDPage page = pdfDocument.getPage(numPages);

        // Start a new content stream which will "hold" the to be created content
        PDPageContentStream contentStream = new PDPageContentStream(pdfDocument, page);

        // Define a text content stream using the selected font, moving the cursor and drawing the text
        contentStream.beginText();
        contentStream.setLeading(14.5f);
        contentStream.newLineAtOffset(40, 725);
        // end initialize contenStream

        // Write alle informations
        for (String sentence: form) {
            if (sentence.equals("Notizen - Seite ")) {
                contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
                contentStream.showText(sentence + (numPages - 3));
                contentStream.newLine();
            } else {
                if (sentence.contains("Abschnitt")) {
                    // change font and write "Title"
                    contentStream.setFont(PDType1Font.HELVETICA_BOLD, 11);
                    contentStream.newLine();
                    contentStream.showText(sentence);
                } else {
                    contentStream.setFont(PDType1Font.HELVETICA, 11);
                    contentStream.newLine();
                    contentStream.showText(sentence);
                }
            }
            // add 1 to the counter
            rowCounter++;
            if (rowCounter >= 45) {
                // remove every entry in 'form' written on this page
                for (Integer i = 0; i < rowCounter; i++) {
                    form.remove(0);
                }
                // call this method again with the reduced 'form' to start a new page
                writeNotesToPage(pdfDocument, form);
                break;
            }
        }

        // End the text stream
        contentStream.endText();

        // Make sure that the content stream is closed:
        contentStream.close();
    }
}
