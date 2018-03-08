import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {FormJMaterial} from '../../formulardaten/form-j/form-j-material';
import {Fragen} from '../../common/fragen';
import {EintragJ} from '../../formulardaten/form-j/eintrag-j';

@Component({
  selector: 'app-form-jbesondere-belastungen',
  templateUrl: './form-j-besondere-belastungen.component.html',
  styleUrls: ['./form-j-besondere-belastungen.component.css']
})
export class FormJBesondereBelastungenComponent {
  constructor(public formJ: FormJMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }

  fuegeHinzuBelastung() {
    if (this.formJ.besondereBelastungen.length < 8) {
      this.formJ.besondereBelastungen.push(new EintragJ());
    }
  }

  entferneBelastung() {
    if (this.formJ.besondereBelastungen.length > 1) {
      this.formJ.besondereBelastungen.pop();
    }
  }
}
