import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormIMaterial} from '../../formulardaten/form-i/form-i-material';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-i-sonstige-verpflichtungen',
  templateUrl: './form-i-sonstige-verpflichtungen.component.html',
  styleUrls: ['./form-i-sonstige-verpflichtungen.component.css']
})
export class FormISonstigeVerpflichtungenComponent implements IFormComponentBase {
  constructor(public formI: FormIMaterial) {
  }

  getUntertitel(): string {
    return Untertitel.I;
  }

  getFragen() {
    return Fragen;
  }
}
