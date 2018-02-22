import {Component} from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-b-versicherungen',
  templateUrl: './form-b-versicherungen.component.html',
  styleUrls: ['./form-b-versicherungen.component.css']
})
export class FormBVersicherungenComponent {
  static UNTERTITEL = 'Versicherungen';

  constructor() { }

  getUntertitel(): string {
    return FormBVersicherungenComponent.UNTERTITEL;
  }
}
