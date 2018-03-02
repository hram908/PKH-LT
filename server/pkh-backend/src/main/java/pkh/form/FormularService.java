package pkh.form;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import pkh.form.materials.PkhFormular;
import java.io.IOException;

/**
 * @author Thomas
 */
@Service
public class FormularService {
    public PkhFormular befuellePkhFormular(String reveivedFormular) {
        ObjectMapper mapper = new ObjectMapper();

        PkhFormular formular = null;
        try {
            formular = mapper.readValue(reveivedFormular, PkhFormular.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return formular;
    }
}
