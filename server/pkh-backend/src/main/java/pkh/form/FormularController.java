package pkh.form;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pkh.form.materials.PkhFormular;

@RestController("formular")
public class FormularController {
    private FormularService formService;

    public FormularController(FormularService formService) {
        this.formService = formService;
    }

    @PostMapping("")
    public ResponseEntity<PkhFormular> createFormular(@RequestBody PkhFormular formular) {
        PkhFormular savedForm = formService.create();
        return ResponseEntity.accepted().body(savedForm);
    }
}
