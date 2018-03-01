import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-chatbot-form-b',
  templateUrl: './chatbot-form-b.component.html',
  styleUrls: ['./chatbot-form-b.component.css']
})
export class ChatbotFormBComponent {
  private readonly DefaultText: string = 'Kann ich Ihnen bei Abschnitt B helfen?';

  public chatbotText: string;
  public lastUserInput: string;

  public userInput: EventEmitter<string>;

  constructor() {
    this.chatbotText = this.DefaultText;
    this.lastUserInput = '';

    this.userInput = new EventEmitter();
  }

  public askWatson(userInput: string){
    this.userInput.emit(userInput);
  }
}
