export class ChatbotService {
  public constructor() {
  }
  public generateAnswer(userInput: string): string{
    if(userInput == "ja"){
      return "Wie heißen Sie?";
    }
    else if(userInput == "nein"){
      return "Dann möchte ich Sie nicht weiter stören.";
    }
    else{
      return "Ich verstehe Sie nicht. Können Sie Ihren Satz umformulieren?";
    }
  }
}
