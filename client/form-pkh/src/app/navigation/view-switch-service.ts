import {IFormComponentBase} from '../common/i-form-component-base';
import {FormAComponent} from '../chatbot/form-a/form-a.component';
import {FormAMaterial} from '../formulardaten/form-a/form-a-material';
import {FormAPersonendatenComponent} from '../formular/form-a-personendaten/form-a-personendaten.component';
import {FormularService} from '../formular/formular-service';
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

/**
 * @author Isabella
 **/
@Injectable()
export class ViewSwitchService {
  private _currentForm: string;
  private navMap: Map<string, IFormComponentBase>;
  public allNavButtons;
  public formChanged: EventEmitter<IFormComponentBase>;

  public constructor(stepSpeicher: StepSpeicher) {
    this._currentForm = NavButtons.num0;
    this.navMap = new Map<string, IFormComponentBase>();
    this.allNavButtons = [];
    this.formChanged = new EventEmitter<IFormComponentBase>();
    this.initializeNavButtons();
    this.initializeNavMap();
  }

  public get currentForm(): string {
    return this._currentForm;
  }

  public set currentForm(form: string) {
    this._currentForm = form;
    this.formChanged.emit(this.navMap[this._currentForm]);
  }

  public initializeNavButtons() {
    this.allNavButtons = [
      NavButtons.num0,
      NavButtons.num1,
      NavButtons.A,
      NavButtons.B,
      NavButtons.C,
      NavButtons.D,
      NavButtons.E,
      NavButtons.F,
      NavButtons.G,
      NavButtons.H,
      NavButtons.I,
      NavButtons.J
    ]
  }

  // HACK - because Array.from(navMap.keys()) always return empty array
  private initializeNavMap() {
    this.navMap[NavButtons.A] = FormAPersonendatenComponent;
    this.navMap[NavButtons.B] = FormBVersicherungenComponent;
    this.navMap[NavButtons.C] = FormCUnterhaltsanspruchComponent;
    this.navMap[NavButtons.D] = FormDGewaehrterUnterhaltComponent;
    this.navMap[NavButtons.E] = FormEBruttoeinnahmenComponent;
    this.navMap[NavButtons.F] = FormFAbzuegeComponent;
    this.navMap[NavButtons.G] = FormGEigentumComponent;
    this.navMap[NavButtons.H] = FormHWohnkostenComponent;
    this.navMap[NavButtons.I] = FormISonstigeVerpflichtungenComponent;
    this.navMap[NavButtons.J] = FormJBesondereBelastungenComponent;
  }
}
