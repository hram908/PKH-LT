import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-form-b-versicherungen',
  templateUrl: './form-b-versicherungen.component.html',
  styleUrls: ['./form-b-versicherungen.component.css']
})
export class FormBVersicherungenComponent implements IFormComponentBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.B;
  }
}
