import {Component} from '@angular/core';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {ChatbotService} from './chatbot-service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  public botIsActive: boolean;

  constructor(private chatbotService: ChatbotService) {
    this.botIsActive = false;
  }

  public get abschnittAntworten(): string[]{
    //return this.chatbotService.chatbotAbschnitte
    return [];
  }

  public get abschnittString(): string{
    return this.chatbotService.activeAbschnittString;
  }

  public toggleBot() {
    this.botIsActive = !this.botIsActive;
  }

  public askWatson(userInput: string) {
    this.chatbotService.askWatson(userInput);

  }

  public get activeFragen(): string[]{
    let activeFragen: string[] = this.chatbotService.activeChatbotFragen;
    if(activeFragen){
      return activeFragen;
    }else{
      this.botIsActive = false;
    }
  }

  public get watsonResponse(): string[]{
     return this.chatbotService.watsonResponse;
  }

}
