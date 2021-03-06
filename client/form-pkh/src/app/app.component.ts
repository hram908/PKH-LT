import {
  Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {AllgemeineDaten} from './allgemeineDaten';
import {ViewSwitchService} from './navigation/view-switch-service';
import {Abschnitt} from './abschnitt';
import {FormularService} from './formular-api/formular-service';
import {Notiz} from './formulardaten/notiz';
import {PkhMaterial} from './formulardaten/pkh-material';
import {PrognoseService} from './formular/endfenster/prognose-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnDestroy, OnInit {
  @ViewChild('appHost', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ComponentFactoryResolver>;
  title = 'Formular für die Prozesskostenhilfe';

  constructor(private viewSwitchService: ViewSwitchService,
              private componentFactoryResolver: ComponentFactoryResolver,
              public allgemeineDaten: AllgemeineDaten,
              private notiz: Notiz, private prognoseService: PrognoseService) {
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
        this.notiz.a.notiz = 'Es fehlen Angaben zur "Person" in Abschnitt a.';
        break;
      case 'B':
        this.notiz.b.notiz = 'Es fehlen Angaben zur "Rechtsschutzversicherung/Mitgliedschaft" in Abschnitt b.';
        break;
      case 'C':
        this.notiz.c.notiz = 'Es fehlen Angaben zu "Unterhaltsanspruch gegenüber anderen Personen" in Abschnitt c.';
        break;
      case 'D':
        this.notiz.d.notiz = 'Es fehlen Angaben zur "" in Abschnitt d.';
        break;
      case 'E':
        this.notiz.e.notiz = 'Es fehlen Angaben zur "" in Abschnitt e.';
        break;
      case 'F':
        this.notiz.f.notiz = 'Es fehlen Angaben zur "" in Abschnitt f.';
        break;
      case 'G':
        this.notiz.g.notiz = 'Es fehlen Angaben zur "" in Abschnitt g.';
        break;
      case 'H':
        this.notiz.h.notiz = 'Es fehlen Angaben zur "" in Abschnitt h.';
        break;
      case 'I':
        this.notiz.i.notiz = 'Es fehlen Angaben zur "" in Abschnitt i.';
        break;
      case 'J':
        this.notiz.j.notiz = 'Es fehlen Angaben zur "" in Abschnitt j.';
        break;
      default:
        this.notiz.a.notiz = 'Es gab einen Fehler bei der Meldung zu Abschnitt ' + abschnitt.id;
    }
  }

  private onFormViewChanged = (abschnitt: Abschnitt) => {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory(abschnitt.component);
    this.componentRef = this.container.createComponent(factory);

    if (abschnitt.id === '9') {
      this.prognoseService.gibPrognose();
    }
  }
}
