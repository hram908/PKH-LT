import {Abschnitt} from '../abschnitt';
import {Injectable} from '@angular/core';
import {FormAComponent} from './form-a/form-a.component';

@Injectable()
export class ChatbotService {
  public chatbotAbschnitte: Abschnitt[];

  public constructor() {
    this.chatbotAbschnitte = [];
    this.initializeAbschnitte();
  }

  private initializeAbschnitte() {
    this.chatbotAbschnitte.push(new Abschnitt('A', 'Beginn', FormAComponent));
  }
}
