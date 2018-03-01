package pkh.form.chatbot;

import com.ibm.watson.developer_cloud.conversation.v1.Conversation;

import com.ibm.watson.developer_cloud.conversation.v1.model.InputData;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageOptions;
import com.ibm.watson.developer_cloud.conversation.v1.model.MessageResponse;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import pkh.form.common.WatsonConversationPropertyService;

import java.util.List;

@RestController
@EnableAutoConfiguration
@Configuration
@ComponentScan
public class ChatbotController {
    private ConversationService service;

    public ChatbotController(ConversationService service) {
        this.service = service;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*", methods = RequestMethod.POST)
    @PostMapping(path = "/chatbot")
    public List<String> askWatsonConversation(@RequestBody String inputText) {
        MessageResponse response =  service.sendMessageToWatson(inputText);
        return response.getOutput().getText();
    }
}
