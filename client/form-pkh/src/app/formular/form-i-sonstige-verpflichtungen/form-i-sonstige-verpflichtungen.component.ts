import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-form-i-sonstige-verpflichtungen',
  templateUrl: './form-i-sonstige-verpflichtungen.component.html',
  styleUrls: ['./form-i-sonstige-verpflichtungen.component.css']
})
export class FormISonstigeVerpflichtungenComponent implements IFormComponentBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.I;
  }
}
