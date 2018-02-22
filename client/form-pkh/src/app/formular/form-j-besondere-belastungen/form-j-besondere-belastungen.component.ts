import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-jbesondere-belastungen',
  templateUrl: './form-j-besondere-belastungen.component.html',
  styleUrls: ['./form-j-besondere-belastungen.component.css']
})
export class FormJBesondereBelastungenComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.J;
  }
}
