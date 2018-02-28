import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {Fragen} from '../../common/fragen';
import {FormEMaterial} from '../../formulardaten/form-e/form-e-material';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent implements IFormComponentBase {
  constructor(public formE: FormEMaterial) {
  }

  getUntertitel(): string {
    return Untertitel.E;
  }

  getFragen() {
    return Fragen;
  }
}
