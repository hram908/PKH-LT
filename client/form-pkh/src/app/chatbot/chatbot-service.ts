import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Abschnitt} from '../abschnitt';

@Injectable()
export class ChatbotService {
  // IMPORTANT NOTE: for deployment delete 4242 port
  private readonly chatbotUrl: string = 'http://127.0.0.1:4242/chatbot';
  private chatbotFragenMap: Map<string, string[]>;
  private _activeChatbotFragen: string[];
  private _activeAbschnittString: string;
  private _watsonResponse: string[];
  private _botIsActive: boolean;

  public constructor(private http: HttpClient,
                     private viewSwitchService: ViewSwitchService) {
    this.chatbotFragenMap = new Map();
    this._activeAbschnittString = '';
    this._watsonResponse = [];
    this.initializeAbschnitte();
    this._botIsActive = false;

    this.viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  public get botIsActive(): boolean {
    return this._botIsActive;
  }

  public set botIsActive(isActive: boolean) {
    this._botIsActive = isActive;
  }

  public get watsonResponse(): string[] {
    return this._watsonResponse;
  }

  public get activeChatbotFragen(): string[] {
    return this._activeChatbotFragen;
  }

  public get activeAbschnittString(): string {
    return this._activeAbschnittString;
  }

  public askWatson(userInput: string) {
    let responses: string[] = [];
    let response: Observable<any> = this.http.post<any>(this.chatbotUrl, userInput);
    response.subscribe(rs => this._watsonResponse = rs);
  }

  private onFormChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {
      this._watsonResponse = [];

      if (this.chatbotFragenMap.get(abschnitt.id)) {
        this._activeChatbotFragen = this.chatbotFragenMap.get(abschnitt.id);
        this._activeAbschnittString = abschnitt.ueberschrift;
      } else {
        this._activeAbschnittString = '';
        this._botIsActive = false;
        this._activeChatbotFragen = [];
      }
    }
  }

  private initializeAbschnitte() {
    this.chatbotFragenMap.set('A', [ChatbotFragen.A.A1]);
    this.chatbotFragenMap.set('B', [ChatbotFragen.B.B1, ChatbotFragen.B.B2]);
    this.chatbotFragenMap.set('C', [ChatbotFragen.C.C1, ChatbotFragen.C.C2])
    this.chatbotFragenMap.set('D', [ChatbotFragen.D.D1, ChatbotFragen.D.D2]);
    this.chatbotFragenMap.set('E', [ChatbotFragen.E.E1, ChatbotFragen.E.E2, ChatbotFragen.E.E3, ChatbotFragen.E.E4]);
    this.chatbotFragenMap.set('F', [ChatbotFragen.F.F1, ChatbotFragen.F.F2, ChatbotFragen.F.F3, ChatbotFragen.F.F4]);
    this.chatbotFragenMap.set('G', [ChatbotFragen.G.G1, ChatbotFragen.G.G2, ChatbotFragen.G.G3]);
    this.chatbotFragenMap.set('H', [ChatbotFragen.H.H1]);
    this.chatbotFragenMap.set('I', [ChatbotFragen.I.I1]);
    this.chatbotFragenMap.set('J', [ChatbotFragen.J.J1, ChatbotFragen.J.J2, ChatbotFragen.J.J3]);
  }
}
