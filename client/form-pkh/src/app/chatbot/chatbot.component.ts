import {Component} from '@angular/core';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Abschnitt} from '../abschnitt';
import {ChatbotService} from './chatbot-service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  public botIsActive: boolean;
  public chatbotText: string;
  public watsonResponses: string[];

  private readonly DefaultText: string = 'Kann ich Ihnen bei Abschnitt B helfen?';

  constructor(private viewSwitchService: ViewSwitchService,
              private chatbotService: ChatbotService) {
    this.chatbotText = this.DefaultText;
    this.botIsActive = false;
    this.watsonResponses = [];

    viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  private onFormChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {

      //let activeComponent = this.chatbotService.chatbotAbschnitte.find(a => a.id === abschnitt.id).component;

    }
  }

  public get abschnittAntworten(): string[]{
    //return this.chatbotService.chatbotAbschnitte
    return [];
  }

  public toggleBot() {
    this.botIsActive = !this.botIsActive;
  }

  getFragen() {
    return ChatbotFragen;
  }

  public askWatson(userInput: string){
    this.chatbotService.askWatson(userInput).subscribe(responses => responses.forEach(response => this.watsonResponses.push(response)));
    console.log(this.watsonResponses);
  }
}
