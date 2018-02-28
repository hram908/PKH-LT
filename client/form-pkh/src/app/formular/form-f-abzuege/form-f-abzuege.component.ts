import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormFMaterial} from '../../formulardaten/form-f/form-f-material';
import {Fragen} from '../../common/fragen';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})

export class FormFAbzuegeComponent implements IFormComponentBase {
  constructor(public formF: FormFMaterial, public formA: FormAMaterial) {
  }

  getFragen() {
    return Fragen;
  }
  getUntertitel(): string {
    return Untertitel.F;
  }
}
