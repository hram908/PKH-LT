import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.H;
  }
}

