/*package pkh.form.classifier;
import com.ibm.watson.developer_cloud.natural_language_classifier.v1.*;
import com.ibm.watson.developer_cloud.natural_language_classifier.v1.model.Classification;
import org.springframework.stereotype.Service;
import pkh.form.common.WatsonClassifierPService;

@Service
public class ClassifierService {

    private final WatsonClassifierPService propertyService;
    private Classification classification;
    private NaturalLanguageClassifier service = new NaturalLanguageClassifier();



    public ClassifierService(WatsonClassifierPService propertyService){
        this.propertyService = propertyService;
        service.setUsernameAndPassword(propertyService.getUsername(), propertyService.getPassword());
    }


    //

    public String sendRequest (String inputText){


        Classification classification = service.classify(propertyService.getClassifierID(),
                inputText).execute();
        return classification.getTopClass();

    }

}
*/