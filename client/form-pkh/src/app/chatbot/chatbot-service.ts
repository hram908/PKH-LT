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
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChatbotService {
  // http://ltdemos.informatik.uni-hamburg.de/pkh-backend/
  private readonly chatbotUrl: string = 'http://127.0.0.1:4242/chatbot';
  public chatbotAbschnitte: Abschnitt[];

  public constructor(private http: HttpClient) {
    this.chatbotAbschnitte = [];

    this.initializeAbschnitte();
  }

  // TODO parse watson data
  public askWatson(userInput: string): Observable<any> {

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain; charset=utf-8');

    let result: Observable<any> = this.http.post<any>(this.chatbotUrl, userInput);

    console.log("send: " + JSON.stringify(userInput));
    console.log(result.subscribe());

    return result;
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
