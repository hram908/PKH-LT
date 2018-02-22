import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-b-versicherungen',
  templateUrl: './form-b-versicherungen.component.html',
  styleUrls: ['./form-b-versicherungen.component.css']
})
export class FormBVersicherungenComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.B;
  }
}
