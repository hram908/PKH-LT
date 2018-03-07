package pkh.form.classifier;


import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import pkh.form.classifier.ClassifierService;

import java.util.List;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class ClassifierController {
    private ClassifierService service;

    public ClassifierController(ClassifierService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @PostMapping(path = "/classifier")

    public String askWatsonClassifier(@RequestBody String inputText) {
        String response =  service.sendRequest(inputText);
        return response;
    }
}
