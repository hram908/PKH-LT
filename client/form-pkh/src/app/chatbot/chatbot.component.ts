import { Component} from '@angular/core';
import {Fragen} from '../common/fragen';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Abschnitt} from '../abschnitt';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
public botIsActive: boolean;
  constructor(private viewSwitchService: ViewSwitchService) {
    this.botIsActive = false;
    viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  private onFormChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {
    }
  }

  public toggleBot() {
    this.botIsActive = !this.botIsActive;
  }

  getFragen() {
    return ChatbotFragen;
  }
}
