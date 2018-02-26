import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormHMaterial} from '../../formulardaten/form-h/form-h-material';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent implements IFormComponentBase {
  constructor(public formH: FormHMaterial) {
  }

  getFragen() {
    return Fragen;
  }

  getUntertitel(): string {
    return Untertitel.H;
  }
}

