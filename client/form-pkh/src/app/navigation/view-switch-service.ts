import {IFormComponentBase} from '../common/i-form-component-base';
import {FormAComponent} from '../chatbot/form-a/form-a.component';
import {FormAMaterial} from '../formulardaten/form-a/form-a-material';
import {FormAPersonendatenComponent} from '../formular/form-a-personendaten/form-a-personendaten.component';
import {ChatbotService} from '../chatbot/chatbot-service';
import {NavButtons} from './nav-buttons';
import {EventEmitter, Injectable} from '@angular/core';
import {FormJBesondereBelastungenComponent} from '../formular/form-j-besondere-belastungen/form-j-besondere-belastungen.component';
import {FormISonstigeVerpflichtungenComponent} from '../formular/form-i-sonstige-verpflichtungen/form-i-sonstige-verpflichtungen.component';
import {FormHWohnkostenComponent} from '../formular/form-h-wohnkosten/form-h-wohnkosten.component';
import {FormGEigentumComponent} from '../formular/form-g-eigentum/form-g-eigentum.component';
import {FormFAbzuegeComponent} from '../formular/form-f-abzuege/form-f-abzuege.component';
import {FormDGewaehrterUnterhaltComponent} from '../formular/form-d-gewaehrter-unterhalt/form-d-gewaehrter-unterhalt.component';
import {FormCUnterhaltsanspruchComponent} from '../formular/form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import {FormEBruttoeinnahmenComponent} from '../formular/form-e-bruttoeinnahmen/form-e-bruttoeinnahmen.component';
import {FormBVersicherungenComponent} from '../formular/form-b-versicherungen/form-b-versicherungen.component';
import {StartfensterComponent} from '../formular/startfenster/startfenster.component';
import {StepSpeicher} from '../stepSpeicher';
import {Abschnitt} from '../abschnitt';

/**
 * @author Isabella
 **/
@Injectable()
export class ViewSwitchService {
  private _currentAbschnitt: Abschnitt;
  private readonly _alleAbschnitte: Abschnitt[];

  public allNavButtonsString: string[];
  public formChanged: EventEmitter<Abschnitt>;

  public constructor(private stepSpeicher: StepSpeicher) {
    this._currentAbschnitt = this.stepSpeicher.abschnitte[0];
    this.allNavButtonsString = [];
    this.formChanged = new EventEmitter<Abschnitt>();
    this.initializeNavButtonStrings();
  }

  public get currentAbschnitt(): Abschnitt {
    return this._currentAbschnitt;
  }

  public set currentAbschnitt(abschnitt: Abschnitt) {
    this._currentAbschnitt = this.stepSpeicher.abschnitte.find(a => a.id === abschnitt.id);
    this.formChanged.emit(this._currentAbschnitt);
  }

  public get alleAbschnitte(): Abschnitt[] {
    return this.stepSpeicher.abschnitte;
  }

  public initializeNavButtonStrings() {
    this.allNavButtonsString = this.stepSpeicher.abschnitte.map(abschnitt => abschnitt.id);
  }
}
