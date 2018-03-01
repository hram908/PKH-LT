import {Component} from '@angular/core';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormEMaterial} from '../../formulardaten/form-e/form-e-material';
import {Fragen} from '../../common/fragen';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent implements IFormComponentBase {
  constructor(public formE: FormEMaterial) {
  }

  getFragen() {
    return Fragen;
  }

  getUntertitel(): string {
    return Untertitel.E;
  }
}
