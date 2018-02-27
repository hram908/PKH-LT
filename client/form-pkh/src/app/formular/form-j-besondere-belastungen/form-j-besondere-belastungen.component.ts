import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormJMaterial} from '../../formulardaten/form-j/form-j-material';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-jbesondere-belastungen',
  templateUrl: './form-j-besondere-belastungen.component.html',
  styleUrls: ['./form-j-besondere-belastungen.component.css']
})
export class FormJBesondereBelastungenComponent implements IFormComponentBase {
  constructor(public formJ: FormJMaterial) {
  }

  getUntertitel(): string {
    return Untertitel.J;
  }

  getFragen() {
    return Fragen;
  }
}
