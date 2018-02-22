import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-i-sonstige-verpflichtungen',
  templateUrl: './form-i-sonstige-verpflichtungen.component.html',
  styleUrls: ['./form-i-sonstige-verpflichtungen.component.css']
})
export class FormISonstigeVerpflichtungenComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.I;
  }
}
