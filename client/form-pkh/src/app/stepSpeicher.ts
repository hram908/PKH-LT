import {Abschnitt} from './abschnitt';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {FormBVersicherungenComponent} from './formular/form-b-versicherungen/form-b-versicherungen.component';
import {FormCUnterhaltsanspruchComponent} from './formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import {FormJBesondereBelastungenComponent} from './formular/form-j-besondere-belastungen/form-j-besondere-belastungen.component';

export class StepSpeicher {
  aktuellerAbschnitt: Abschnitt;
  abschnitte: Abschnitt[] = [];

  constructor() {
    this.abschnitte.push(new Abschnitt('0', 'Beginn', StartfensterComponent));
    this.abschnitte.push(new Abschnitt('A', 'Personendaten', FormAPersonendatenComponent));
    this.abschnitte.push(new Abschnitt('B', 'Versicherungen', FormBVersicherungenComponent));
    this.abschnitte.push(new Abschnitt('C', 'Unterhaltsanspruch', FormCUnterhaltsanspruchComponent));
    /*this.abschnitte.push(new Abschnitt('D', 'Beginn4'));
    this.abschnitte.push(new Abschnitt('E', 'Beginn5'));
    this.abschnitte.push(new Abschnitt('F', 'Beginn6'));
    this.abschnitte.push(new Abschnitt('G', 'Beginn7'));
    this.abschnitte.push(new Abschnitt('H', 'Beginn8'));
    this.abschnitte.push(new Abschnitt('I', 'Beginn9'));*/
    this.abschnitte.push(new Abschnitt('J', 'Besondere Belastungen', FormJBesondereBelastungenComponent));

    this.aktuellerAbschnitt = this.abschnitte[0];
  }
}
