import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent implements IFormComponentBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.H;
  }
}

