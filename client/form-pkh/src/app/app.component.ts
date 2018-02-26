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
              public allgemeineDaten: AllgemeineDaten, public stepSpeicher: StepSpeicher) {
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
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.stepSpeicher.aktuellerAbschnitt.component);
    this.componentRef = this.container.createComponent(factory);
  }

  private onFormViewChanged = (component: IFormComponentBase) => {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.stepSpeicher.aktuellerAbschnitt.component);
    this.componentRef = this.container.createComponent(factory);
  }

  naechsterAbschnitt(id: string): any {
    switch (id) {
      case 'A':
        return FormAPersonendatenComponent;
      default:
        return FormAPersonendatenComponent;
    }
  }

  vorherigerAbschnitt(id: string): any {
    switch (id) {
      case '0':
        return StartfensterComponent;
      default:
        return StartfensterComponent;
    }
  }
}
