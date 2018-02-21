import {
  AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Formulardaten} from './formulardaten';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {AllgemeineDaten} from './allgemeineDaten';
import {PersonendatenComponent} from './formular/personendaten/personendaten.component';



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
              public allgemeineDaten: AllgemeineDaten) {
  }

  ngAfterViewInit() {
    this.erschaffeComponent('0');
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  erschaffeComponent(komponente: string) {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.holeAbschnitt(komponente));
    this.componentRef = this.container.createComponent(factory);
  }

  holeAbschnitt(id: string): any {
    switch (id) {
      case '0': return StartfensterComponent;
      case 'A': return PersonendatenComponent;
    }
  }
}
