package pkh.form;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import pkh.form.materials.PkhFormular;
import pkh.form.common.LinkCreatorService;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class FormularController {
    private FormularService formService;
    private PdfConverterService pdfConverterService;

    private Logger Log = LoggerFactory.getLogger(FormularController.class);

    public FormularController(FormularService formService) {
        this.formService = formService;
        this.pdfConverterService = new PdfConverterService();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @PostMapping("/formular")
    public String erzeugeFormular(@RequestBody String jsonString) {
        Log.info("Received Formular: " + jsonString);

        PkhFormular savedForm = formService.befuellePkhFormular(jsonString);

        pdfConverterService.erzeugePdf(savedForm);

        System.out.println(LinkCreatorService.getDownloadLink());
        return "Downloadlink: " + LinkCreatorService.getDownloadLink();
    }
}
