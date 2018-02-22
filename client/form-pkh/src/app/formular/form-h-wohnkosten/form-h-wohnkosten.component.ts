import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.H;
  }
}

