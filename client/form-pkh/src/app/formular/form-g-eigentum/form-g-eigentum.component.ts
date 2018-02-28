import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormGMaterial} from '../../formulardaten/form-g/form-g-material';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-g-eigentum',
  templateUrl: './form-g-eigentum.component.html',
  styleUrls: ['./form-g-eigentum.component.css']
})
export class FormGEigentumComponent implements IFormComponentBase {
  constructor(public formG: FormGMaterial) {
  }

  getUntertitel(): string {
    return Untertitel.G;
  }
}

