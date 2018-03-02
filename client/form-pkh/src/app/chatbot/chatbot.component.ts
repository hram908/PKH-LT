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
  public watsonResponses: string[];

  constructor(private chatbotService: ChatbotService) {
    this.botIsActive = false;
    this.watsonResponses = [];
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
    this.chatbotService.askWatson(userInput).subscribe(responses => responses.forEach(response => this.watsonResponses.push(response)));
    console.log(this.watsonResponses);
  }

  public get activeFragen(): string[]{
    return this.chatbotService.activeChatbotFragen;
  }

}
