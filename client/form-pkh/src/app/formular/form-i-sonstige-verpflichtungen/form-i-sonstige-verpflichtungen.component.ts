import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormIMaterial} from '../../formulardaten/form-i/form-i-material';
import {Fragen} from '../../common/fragen';
import {EintragI} from '../../formulardaten/form-i/eintrag-i';

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

  fuegeHinzuVerpflichtung() {
    if (this.formI.zahlungsverpflichtungen.length < 8) {
      this.formI.zahlungsverpflichtungen.push(new EintragI());
    }
  }

  entferneVerpflichtung() {
    if (this.formI.zahlungsverpflichtungen.length > 1) {
      this.formI.zahlungsverpflichtungen.pop();
    }
  }
}
