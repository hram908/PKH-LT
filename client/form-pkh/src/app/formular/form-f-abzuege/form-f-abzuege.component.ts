import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})
export class FormFAbzuegeComponent implements IFormComponentBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.F;
  }
}
