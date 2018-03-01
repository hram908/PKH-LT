import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot-form-b',
  templateUrl: './chatbot-form-b.component.html',
  styleUrls: ['./chatbot-form-b.component.css']
})
export class ChatbotFormBComponent {
  private readonly DefaultText: string = 'Kann ich Ihnen bei Abschnitt B helfen?';

  public chatbotText: string;
  public lastUserInput: string;

  constructor() {
    this.chatbotText = this.DefaultText;
    this.lastUserInput = '';
  }

  public askWatson(userInput: string){

  }
}
