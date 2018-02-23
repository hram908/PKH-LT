import {Component} from '@angular/core';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-a-personendaten',
  templateUrl: './form-a-personendaten.component.html',
  styleUrls: ['./form-a-personendaten.component.css']
})
export class FormAPersonendatenComponent implements IFormComponentBase{
  constructor(public formA: FormAMaterial) {

  }

  getUntertitel(): string {
    return Untertitel.A;
  }

  getFragen() {
    return Fragen;
  }
}
