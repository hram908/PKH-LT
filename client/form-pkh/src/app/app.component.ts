import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {AllgemeineDaten} from './allgemeineDaten';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {StepSpeicher} from './stepSpeicher';
import {ViewSwitchService} from './navigation/view-switch-service';
import {IFormComponentBase} from './common/i-form-component-base';
import {Abschnitt} from './abschnitt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Prozesskostenhilfe-Helfer';
  rechtsgebiet = false;
  chatbot = false;

  constructor(private viewSwitchService: ViewSwitchService,
              private componentFactoryResolver: ComponentFactoryResolver,
              public allgemeineDaten: AllgemeineDaten) {
    this.viewSwitchService.formChanged.subscribe(this.onFormViewChanged);
  }

  ngOnInit() {
    this.erschaffeComponent();
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  erschaffeComponent() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.viewSwitchService.currentAbschnitt.component);
    this.componentRef = this.container.createComponent(factory);
  }

  private onFormViewChanged = (abschnitt: Abschnitt) => {
    if(abschnitt){
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(abschnitt.component);
    this.componentRef = this.container.createComponent(factory);
    }
  }
}
