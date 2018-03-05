import {Component} from '@angular/core';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {ChatbotService} from './chatbot-service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  constructor(private chatbotService: ChatbotService) {
  }

  public get botIsActive(): boolean{
    return this.chatbotService.botIsActive;
  }

  public get abschnittAntworten(): string[]{
    //return this.chatbotService.chatbotAbschnitte
    return [];
  }

  public get abschnittString(): string{
    return this.chatbotService.activeAbschnittString;
  }

  public toggleBot() {
    this.chatbotService.botIsActive = !this.chatbotService.botIsActive;
  }

  public askWatson(userInput: string) {
    this.chatbotService.askWatson(userInput);

  }

  public get activeFragen(): string[]{
    let activeFragen: string[] = this.chatbotService.activeChatbotFragen;
    if(activeFragen){
      return activeFragen;
    }else{
      this.chatbotService.botIsActive = false;
    }
  }

  public get watsonResponse(): string[]{
     return this.chatbotService.watsonResponse;
  }

}
