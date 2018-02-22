import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../chatbot-service';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {

  private readonly DefaultText: string = 'Kann ich Ihnen helfen?';

  public chatbotText: string;
  public lastUserInput: string;
  public showUserInput: boolean;

  constructor(private chatbotService: ChatbotService) {
    this.chatbotText = this.DefaultText;
    this.lastUserInput = '';
  }

  public onUserInput() {
    this.showUserInput = true;
    this.chatbotText = this.chatbotService.generateAnswer(this.lastUserInput);
  }
}
