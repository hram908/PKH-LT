import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})
export class FormFAbzuegeComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.F;
  }
}
