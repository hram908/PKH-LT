import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ChatbotService {
  // IMPORTANT NOTE: for deployment change url to  'deployed server url'/chatbot
  private readonly chatbotUrl: string = 'http://127.0.0.1/4242/chatbot';
  public chatbotAbschnitte: Map<string, string[]>;

  public constructor(private http: HttpClient) {
    this.chatbotAbschnitte = new Map();
    this.initializeAbschnitte();
  }

  public askWatson(userInput: string): Observable<string[]> {
    return this.http.post<any>(this.chatbotUrl, userInput);
  }

  private initializeAbschnitte() {
    this.chatbotAbschnitte.set('A', ['']);

  }
}
