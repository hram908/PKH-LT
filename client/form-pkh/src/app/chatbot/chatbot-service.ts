import {Abschnitt} from '../abschnitt';
import {Injectable} from '@angular/core';
import {FormAComponent} from './form-a/form-a.component';
import {ChatbotFormBComponent} from './chatbot-form-b/chatbot-form-b.component';
import {ChatbotFormCComponent} from './chatbot-form-c/chatbot-form-c.component';
import {ChatbotFormDComponent} from './chatbot-form-d/chatbot-form-d.component';
import {ChatbotFormEComponent} from './chatbot-form-e/chatbot-form-e.component';
import {ChatbotFormFComponent} from './chatbot-form-f/chatbot-form-f.component';
import {ChatbotFormGComponent} from './chatbot-form-g/chatbot-form-g.component';
import {ChatbotFormHComponent} from './chatbot-form-h/chatbot-form-h.component';
import {ChatbotFormIComponent} from './chatbot-form-i/chatbot-form-i.component';
import {ChatbotFormJComponent} from './chatbot-form-j/chatbot-form-j.component';

@Injectable()
export class ChatbotService {
  public chatbotAbschnitte: Abschnitt[];

  public constructor() {
    this.chatbotAbschnitte = [];
    this.initializeAbschnitte();
  }

  private initializeAbschnitte() {
    this.chatbotAbschnitte.push(new Abschnitt('A', 'Beginn', FormAComponent));
    this.chatbotAbschnitte.push(new Abschnitt('B', 'Versicherungen', ChatbotFormBComponent));
    this.chatbotAbschnitte.push(new Abschnitt('C', 'Unterhaltsanspruch', ChatbotFormCComponent));
    this.chatbotAbschnitte.push(new Abschnitt('D', 'GewaehrterUnterhalt', ChatbotFormDComponent));
    this.chatbotAbschnitte.push(new Abschnitt('E', 'Bruttoeinnahmen', ChatbotFormEComponent));
    this.chatbotAbschnitte.push(new Abschnitt('F', 'Abzuege', ChatbotFormFComponent));
    this.chatbotAbschnitte.push(new Abschnitt('G', 'Eigentum', ChatbotFormGComponent));
    this.chatbotAbschnitte.push(new Abschnitt('H', 'Wohnkosten', ChatbotFormHComponent));
    this.chatbotAbschnitte.push(new Abschnitt('I', 'SonstigeVerpflichtungen', ChatbotFormIComponent));
    this.chatbotAbschnitte.push(new Abschnitt('J', 'BesondereBelastungen', ChatbotFormJComponent));

  }
}
