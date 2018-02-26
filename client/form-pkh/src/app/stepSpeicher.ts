import {Abschnitt} from './abschnitt';
import {StartfensterComponent} from './formular/startfenster/startfenster.component';
import {FormAPersonendatenComponent} from './formular/form-a-personendaten/form-a-personendaten.component';
import {FormBVersicherungenComponent} from './formular/form-b-versicherungen/form-b-versicherungen.component';
import {FormFAbzuegeComponent} from './formular/form-f-abzuege/form-f-abzuege.component';
import {FormCUnterhaltsanspruchComponent} from './formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import {FormJBesondereBelastungenComponent} from './formular/form-j-besondere-belastungen/form-j-besondere-belastungen.component';
import {NavButtons} from './navigation/nav-buttons';
import {FormHWohnkostenComponent} from './formular/form-h-wohnkosten/form-h-wohnkosten.component';
import {FormISonstigeVerpflichtungenComponent} from './formular/form-i-sonstige-verpflichtungen/form-i-sonstige-verpflichtungen.component';
import {FormEBruttoeinnahmenComponent} from './formular/form-e-bruttoeinnahmen/form-e-bruttoeinnahmen.component';
import {FormDGewaehrterUnterhaltComponent} from './formular/form-d-gewaehrter-unterhalt/form-d-gewaehrter-unterhalt.component';
import {FormGEigentumComponent} from './formular/form-g-eigentum/form-g-eigentum.component';

/**
 * @author Thomas, Isi
 */
export class StepSpeicher {
  aktuellerAbschnitt: Abschnitt;
  abschnitte: Abschnitt[] = [];

  constructor() {
    this.abschnitte.push(new Abschnitt('0', 'Beginn', StartfensterComponent));
    this.abschnitte.push(new Abschnitt('A', 'Personendaten', FormAPersonendatenComponent));
    this.abschnitte.push(new Abschnitt('B', 'Versicherungen', FormBVersicherungenComponent));
    this.abschnitte.push(new Abschnitt('C', 'Unterhaltsanspruch', FormCUnterhaltsanspruchComponent));
    this.abschnitte.push(new Abschnitt('D', 'GewaehrterUnterhalt', FormDGewaehrterUnterhaltComponent));
    this.abschnitte.push(new Abschnitt('E', 'Bruttoeinnahmen', FormEBruttoeinnahmenComponent));
    this.abschnitte.push(new Abschnitt('F', 'Abzuege', FormFAbzuegeComponent));
    this.abschnitte.push(new Abschnitt('G', 'Eigentum', FormGEigentumComponent));
    this.abschnitte.push(new Abschnitt('H', 'Wohnkosten', FormHWohnkostenComponent));
    this.abschnitte.push(new Abschnitt('I', 'SonstigeVerpflichtungen', FormISonstigeVerpflichtungenComponent));
    this.abschnitte.push(new Abschnitt('J', 'BesondereBelastungen', FormJBesondereBelastungenComponent));
  //  this.abschnitte.push(new Abschnitt('K', 'Beginn11'));

    this.aktuellerAbschnitt = this.abschnitte[0];
  }
}
