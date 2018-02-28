# PKH

## Prerequisites

### Import in IntelliJ IDEA

-  File > New > Project From Version Control > GitHub
-  clone repository
-  go to File > Project Structure > Modules
-  import module *server/pkh-backend*

### Web-Client

-  install node.js and npm
-  go to root directory of the web-client (*client/form-pkh*)
-  open the terminal
-  *npm install -g @angular/cli*
-  *npm install*

### Backend 

-  go to root directory of the server (*server/pkh-backend*)
-  open he terminal 
-  *gradlew install*

## Development

### Run the Web-Client

-  go to root directoy of the web-client (*client/form-pkh*)
-  open the terminal
-  *ng serve*

### Run the Backend

-  go to root directoy of the backend *server/pkh-backend*
-  open the terminal
-  *gradlew bootRun*

**in IntelliJ:**
-  go to *Run > Edit Configurations...*
-  *Add New Configuration > Gradle* and select the directory *server/pkh-backend* as gradle project
-  add *bootRun* in Tasks
-  nice to have: check *'Single instance only'*


### Working with Watson Conversation

-  go to the directory *server/pkh-backend/src/main/resources*
-  create a file named 'watson-conversation-credentials.txt'
-  type in your credentials as follows:

   -  watson.conversation.workspace-id=*your workspace id*
   -  watson.conversation.username=*your username*
   -  watson.conversation.password=*your password*
   -  watson.conversation.version-date=*your version date*


## Build
**for the war file:**
- run the *build.bat* on the root directory

**for the jar file:**
- go to *build.gradle* and comment line 10 *apply plugin: 'war'*