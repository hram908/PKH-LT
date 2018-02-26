/**
 * @author Isabella
 **/
import {FormAPersonendatenComponent} from './form-a-personendaten/form-a-personendaten.component';
import {FormBVersicherungenComponent} from './form-b-versicherungen/form-b-versicherungen.component';
import {FormCUnterhaltsanspruchComponent} from './form-c-unterhaltsanspruch/form-c-unterhaltsanspruch.component';
import {FormDGewaehrterUnterhaltComponent} from './form-d-gewaehrter-unterhalt/form-d-gewaehrter-unterhalt.component';
import {FormEBruttoeinnahmenComponent} from './form-e-bruttoeinnahmen/form-e-bruttoeinnahmen.component';
import {FormFAbzuegeComponent} from './form-f-abzuege/form-f-abzuege.component';
import {FormGEigentumComponent} from './form-g-eigentum/form-g-eigentum.component';
import {FormHWohnkostenComponent} from './form-h-wohnkosten/form-h-wohnkosten.component';
import {FormISonstigeVerpflichtungenComponent} from './form-i-sonstige-verpflichtungen/form-i-sonstige-verpflichtungen.component';
import {FormJBesondereBelastungenComponent} from './form-j-besondere-belastungen/form-j-besondere-belastungen.component';
import {IFormComponentBase} from '../common/i-form-component-base';
import {Injectable} from '@angular/core';

@Injectable()
export class FormularService {
  public activeForm: IFormComponentBase;
  public constructor(private formA: FormAPersonendatenComponent,
                     private formB: FormBVersicherungenComponent,
                     private formC: FormCUnterhaltsanspruchComponent,
                     private formD: FormDGewaehrterUnterhaltComponent,
                     private formE: FormEBruttoeinnahmenComponent,
                     private formF: FormFAbzuegeComponent,
                     private formG: FormGEigentumComponent,
                     private formH: FormHWohnkostenComponent,
                     private formI: FormISonstigeVerpflichtungenComponent,
                     private formJ: FormJBesondereBelastungenComponent) {

  }

  public allForms(): IFormComponentBase[] {
    return [
      this.formA,
      this.formB,
      this.formC,
      this.formD,
      this.formE,
      this.formF,
      this.formG,
      this.formH,
      this.formI,
      this.formJ
    ];
  }

  public showFormComponent(form: IFormComponentBase) {
    this.activeForm = form;
  }
}
