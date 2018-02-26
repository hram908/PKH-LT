import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {AllgemeineDaten} from './allgemeineDaten';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {StepSpeicher} from './stepSpeicher';
import {FormBVersicherungenComponent} from './formular/form-b-versicherungen/form-b-versicherungen.component';
import {FormCUnterhaltsanspruchComponent} from './formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Prozesskostenhilfe-Helfer';
  rechtsgebiet = false;
  chatbot = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              public allgemeineDaten: AllgemeineDaten, public stepSpeicher: StepSpeicher) {
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

  weiter() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.naechsterAbschnitt(this.stepSpeicher.aktuellerAbschnitt.id));
    this.componentRef = this.container.createComponent(factory);
  }

  zurueck() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      this.vorherigerAbschnitt(this.stepSpeicher.aktuellerAbschnitt.id));
    this.componentRef = this.container.createComponent(factory);
  }

  naechsterAbschnitt(id: string): any {
    switch (id) {
      case '0': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[1];
        break;
      case 'A': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[2];
        break;
      case 'B': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[3];
        break;
      case 'C': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[4];
        break;
      case 'I': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[5];
        break;
    }
    return this.stepSpeicher.aktuellerAbschnitt.component;
  }

  vorherigerAbschnitt(id: string): any {
    switch (id) {
      case 'A': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[0];
        break;
      case 'B': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[1];
        break;
      case 'C': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[2];
        break;
      case 'I': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[3];
        break;
      case 'J': this.stepSpeicher.aktuellerAbschnitt = this.stepSpeicher.abschnitte[4];
        break;
    }
    return this.stepSpeicher.aktuellerAbschnitt.component;
  }
}
