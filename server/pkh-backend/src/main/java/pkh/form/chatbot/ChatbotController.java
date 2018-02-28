package pkh.form.chatbot;

import com.ibm.watson.developer_cloud.conversation.v1.Conversation;

import com.ibm.watson.developer_cloud.conversation.v1.model.InputData;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;
import pkh.form.common.WatsonConversationPropertyService;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class ChatbotController {
    private Conversation service;

    public ChatbotController(WatsonConversationPropertyService propertyService) {

        service = new Conversation(propertyService.getVersionDate());
        service.setUsernameAndPassword(propertyService.getUsername(), propertyService.getPassword());

        // TODO get text input for bot
        InputData input = new InputData.Builder("Hello").build();

        MessageOptions options = new MessageOptions.Builder(propertyService.getWorkspaceId())
                .input(input)
                .build();

        MessageResponse response = service.message(options).execute();
    }


}
