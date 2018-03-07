package pkh.form;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pkh.form.materials.PkhFormular;
import pkh.form.common.LinkCreatorService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class FormularController {
    private FormularService formService;
    private PdfConverterService pdfConverterService;

    public FormularController(FormularService formService) {
        this.formService = formService;
        this.pdfConverterService = new PdfConverterService();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @PostMapping("/formular")
    public String produceFormular(@RequestBody String jsonString) {
        // Log.info("Received Formular: " + jsonString);

        PkhFormular savedForm = formService.befuellePkhFormular(jsonString);

        pdfConverterService.createPdf(savedForm);

        // System.out.println(LinkCreatorService.getDownloadLink());
        return LinkCreatorService.getDownloadLink();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.GET)
    @GetMapping("/pdf")
    public ResponseEntity<byte[]> getPdfDownload(@RequestParam String fileName) throws IOException {
        byte[] contents = Files.readAllBytes(Paths.get(fileName));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("application/pdf"));
        headers.setContentDispositionFormData(fileName, fileName);
        headers.setCacheControl("must-revalidate, post-check=0, pre-check=0");
        return new ResponseEntity<>(contents, headers, HttpStatus.OK); // /WEB-INF/classes/
    }
}
