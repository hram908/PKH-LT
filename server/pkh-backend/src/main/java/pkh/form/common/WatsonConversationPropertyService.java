package pkh.form.common;

import com.google.common.base.Charsets;
import com.google.common.io.Resources;
import com.ibm.watson.developer_cloud.conversation.v1.Conversation;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@Service
public class WatsonConversationPropertyService {

    private static final String WATSON_CONVERSATION_CREDENTIAL_PATH = "watson-conversation-credentials.txt";

    private String workspaceId;
    private String username;
    private String password;
    private String versionDate;

    public WatsonConversationPropertyService() {
        initializeProperties(WATSON_CONVERSATION_CREDENTIAL_PATH);
    }

    private void initializeProperties(String pathToCredentialFile) {
        try {
            List<String> lines = Resources.readLines(Resources.getResource(WATSON_CONVERSATION_CREDENTIAL_PATH), Charsets.UTF_8);

            for (String line : lines) {
                // look at the first part of the line
                switch (line.substring(0, line.indexOf('='))) {
                    case "watson.conversation.workspace-id":
                        workspaceId = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                    case "watson.conversation.username":
                        username = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                    case "watson.conversation.password":
                        password = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                    case "watson.conversation.version-date":
                        versionDate = line.substring(line.indexOf('=') + 1, line.length());
                        break;
                }
            }

            System.out.println("workspaceid: " + workspaceId + " username: " + username + " password: " + password + " date: " + versionDate);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String getWorkspaceId() {
        return workspaceId;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getVersionDate() {
        return versionDate;
    }
}
