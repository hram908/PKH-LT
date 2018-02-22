import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})
export class FormFAbzuegeComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.F;
  }
}
