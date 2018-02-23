import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-d-gewaehrter-unterhalt',
  templateUrl: './form-d-gewaehrter-unterhalt.component.html',
  styleUrls: ['./form-d-gewaehrter-unterhalt.component.css']
})
export class FormDGewaehrterUnterhaltComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.D;
  }
}
