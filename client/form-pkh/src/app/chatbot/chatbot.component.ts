import { Component} from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent{
public botIsActive: boolean;
  constructor() {
    this.botIsActive = false;
  }

  public toggleBot(){
    console.log("Bot status:" + this.botIsActive);
    this.botIsActive = !this.botIsActive;
  }

}
