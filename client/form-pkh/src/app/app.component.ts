import {
  Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AllgemeineDaten} from './allgemeineDaten';
import {ViewSwitchService} from './navigation/view-switch-service';
import {Abschnitt} from './abschnitt';
import {RestService} from './rest-api/rest-service';
import {Notiz} from './formulardaten/notiz';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Prozesskostenhilfe-Helfer';

  constructor(private viewSwitchService: ViewSwitchService,
              private componentFactoryResolver: ComponentFactoryResolver,
              public allgemeineDaten: AllgemeineDaten, public rest: RestService, private notiz: Notiz) {
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

  setNotiz(abschnitt: Abschnitt) {
    switch (abschnitt.id) {
      case 'A':
        this.notiz.A.notiz = 'Es fehlen Angaben zur "Person" in Abschnitt A.';
        break;
      case 'B':
        this.notiz.B.notiz = 'Es fehlen Angaben zur "Rechtsschutzversicherung/Mitgliedschaft" in Abschnitt B.';
        break;
      case 'C':
        this.notiz.C.notiz = 'Es fehlen Angaben zu "Unterhaltsanspruch gegenüber anderen Personen" in Abschnitt C.';
        break;
      case 'D':
        this.notiz.D.notiz = 'Es fehlen Angaben zur "" in Abschnitt D.';
        break;
      case 'E':
        this.notiz.E.notiz = 'Es fehlen Angaben zur "" in Abschnitt E.';
        break;
      case 'F':
        this.notiz.F.notiz = 'Es fehlen Angaben zur "" in Abschnitt F.';
        break;
      case 'G':
        this.notiz.G.notiz = 'Es fehlen Angaben zur "" in Abschnitt G.';
        break;
      case 'H':
        this.notiz.H.notiz = 'Es fehlen Angaben zur "" in Abschnitt H.';
        break;
      case 'I':
        this.notiz.I.notiz = 'Es fehlen Angaben zur "" in Abschnitt I.';
        break;
      case 'J':
        this.notiz.J.notiz = 'Es fehlen Angaben zur "" in Abschnitt J.';
        break;
      default: this.notiz.A.notiz = 'Es gab einen Fehler bei der Meldung zu Abschnitt ' + abschnitt.id;
    }
  }

  private onFormViewChanged = (abschnitt: Abschnitt) => {
    if (abschnitt) {
      this.container.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(abschnitt.component);
      this.componentRef = this.container.createComponent(factory);
    }
  }
}
