import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-jbesondere-belastungen',
  templateUrl: './form-j-besondere-belastungen.component.html',
  styleUrls: ['./form-j-besondere-belastungen.component.css']
})
export class FormJBesondereBelastungenComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.J;
  }
}
