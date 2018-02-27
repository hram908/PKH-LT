import { Component} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
public botIsActive: boolean;
  constructor() {
    this.botIsActive = false;
  }

  public toggleBot() {
    this.botIsActive = !this.botIsActive;
  }

}
