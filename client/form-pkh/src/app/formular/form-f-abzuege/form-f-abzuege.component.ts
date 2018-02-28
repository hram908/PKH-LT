import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormFMaterial} from '../../formulardaten/form-f/form-f-material';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})
export class FormFAbzuegeComponent implements IFormComponentBase {
  constructor(public formF: FormFMaterial) {
  }

  getFragen() {
    return Fragen;
  }
  getUntertitel(): string {
    return Untertitel.F;
  }
}
