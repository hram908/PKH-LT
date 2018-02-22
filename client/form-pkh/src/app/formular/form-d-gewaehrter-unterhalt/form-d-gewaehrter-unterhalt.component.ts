import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-d-gewaehrter-unterhalt',
  templateUrl: './form-d-gewaehrter-unterhalt.component.html',
  styleUrls: ['./form-d-gewaehrter-unterhalt.component.css']
})
export class FormDGewaehrterUnterhaltComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.D;
  }
}
