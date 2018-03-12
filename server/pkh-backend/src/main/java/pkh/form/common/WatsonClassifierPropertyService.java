package pkh.form.common;

import com.google.common.base.Charsets;
import com.google.common.io.Resources;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class WatsonClassifierPropertyService  {
    private final Logger Log = LoggerFactory.getLogger(WatsonClassifierPropertyService.class);

    private static final String WATSON_CLASSIFIER_CREDENTIAL_PATH = "watson-classifier-credentials.txt";


    private String username;
    private String password;
    private String classifierID;

    public WatsonClassifierPropertyService() {
        initializeProperties(WATSON_CLASSIFIER_CREDENTIAL_PATH);
    }

    private void initializeProperties(String pathToCredentialFile) {
        try {
            List<String> lines = Resources.readLines(Resources.getResource(WATSON_CLASSIFIER_CREDENTIAL_PATH), Charsets.UTF_8);

            for (String line : lines) {
                // look at the first part of the line
                switch (line.substring(0, line.indexOf('='))) {

                    case "watson.classifier.username":
                        username = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                    case "watson.classifier.password":
                        password = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                    case "watson.classifier.classifierID":
                        classifierID = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                }
            }

        } catch (IOException e) {
            Log.error("Couldn't create watson conversation properties from file. Probably couldn't find file in resources. Stacktrace: " + e.getStackTrace());
        }
        Log.info("Finished reading watson conversation credentials from file.");
    }


    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getClassifierID() {
        return classifierID;
    }
}
