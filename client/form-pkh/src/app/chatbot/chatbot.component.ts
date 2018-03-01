import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
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
  @ViewChild('chatbotForm', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;

  public botIsActive: boolean;
  public chatbotText: string;

  private readonly DefaultText: string = 'Kann ich Ihnen bei Abschnitt B helfen?';

  constructor(private viewSwitchService: ViewSwitchService,
              private chatbotService: ChatbotService,
              private componentFactoryResolver: ComponentFactoryResolver) {
    this.chatbotText = this.DefaultText;
    this.botIsActive = false;
    viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  private onFormChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {
      this.container.clear();

      let activeComponent = this.chatbotService.chatbotAbschnitte.find(a => a.id === abschnitt.id).component;

      const factory = this.componentFactoryResolver.resolveComponentFactory(activeComponent);
      this.componentRef = this.container.createComponent(factory);
    }
  }

  public toggleBot() {
    this.botIsActive = !this.botIsActive;
  }

  getFragen() {
    return ChatbotFragen;
  }

  public askWatson(userInput: string){
    this.chatbotService.askWatson(userInput);
  }
}
