package pkh.form;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pkh.form.materials.PkhFormular;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class FormularController {
    private FormularService formService;

    private Logger Log = LoggerFactory.getLogger(FormularController.class);

    public FormularController(FormularService formService) {
        this.formService = formService;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @PostMapping("/formular")
    public String createFormular(@RequestBody PkhFormular formular) {
        PkhFormular savedForm = formService.create();
        Log.info("Received Formular" + formular);
        // ResponseEntity<PkhFormular>
        //return ResponseEntity.accepted().body(savedForm);
        return "YEA";
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @GetMapping("/test")
    public String getFormular() {
        // PkhFormular savedForm = formService.create();
        Log.info("Received Formular");
        // ResponseEntity<PkhFormular>
        //return ResponseEntity.accepted().body(savedForm);
        return "YEA";
    }
}
