package pkh.form.chatbot;

import com.ibm.watson.developer_cloud.conversation.v1.Conversation;
import com.ibm.watson.developer_cloud.conversation.v1.model.InputData;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
import org.springframework.stereotype.Service;
import pkh.form.common.WatsonConversationPropertyService;

@Service
public class ConversationService {
    private Conversation watsonService;
    private WatsonConversationPropertyService propertyService;

    public ConversationService(WatsonConversationPropertyService propertyService) {
        this.propertyService = propertyService;

        watsonService = new Conversation(propertyService.getVersionDate());
        watsonService.setUsernameAndPassword(propertyService.getUsername(), propertyService.getPassword());

    }

    public MessageResponse sendMessageToWatson(String textInput) {
        InputData input = new InputData.Builder(textInput).build();

        MessageOptions options = new MessageOptions.Builder(propertyService.getWorkspaceId())
                .input(input)
                .build();

        return watsonService.message(options).execute();
    }


}
