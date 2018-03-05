import { Component } from '@angular/core';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-endfenster',
  templateUrl: './endfenster.component.html',
  styleUrls: ['./endfenster.component.css']
})
export class EndfensterComponent implements IFormComponentBase {
  getUntertitel(): string {
    return 'Generieren des PDFs';
  }

  constructor() { }
}
