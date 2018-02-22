import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Formulardaten} from './formulardaten';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {AllgemeineDaten} from './allgemeineDaten';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {StepSpeicher} from './stepSpeicher';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('appHost', { read: ViewContainerRef }) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Prozesskostenhilfe-Helfer';

  constructor(private componentFactoryResolver: ComponentFactoryResolver, public formulardaten: Formulardaten,
              public allgemeineDaten: AllgemeineDaten, public stepSpeicher: StepSpeicher) {
  }

  ngAfterViewInit() {
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
    switch (this.stepSpeicher.aktuellerAbschnitt.id) {
      case '0': return FormAPersonendatenComponent;
    }
  }

  vorherigerAbschnitt(id: string): any {
    switch (this.stepSpeicher.aktuellerAbschnitt.id) {
      case 'A': return StartfensterComponent;
      default: return StartfensterComponent;
    }
  }
}
