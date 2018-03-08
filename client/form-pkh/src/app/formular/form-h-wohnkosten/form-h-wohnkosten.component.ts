import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {FormHMaterial} from '../../formulardaten/form-h/form-h-material';
import {Fragen} from '../../common/fragen';
import {FremdmittelBelastung} from '../../formulardaten/form-h/fremdmittel-belastung';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent {
  constructor(public formH: FormHMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }

  fuegeBelastungHinzu() {
    if (this.formH.eigentumsDaten.belastungAusFremdmitteln.length < 9) {
      this.formH.eigentumsDaten.belastungAusFremdmitteln.push(new FremdmittelBelastung());
    }
  }

  entferneBelastung() {
    if (this.formH.eigentumsDaten.belastungAusFremdmitteln.length > 1) {
      this.formH.eigentumsDaten.belastungAusFremdmitteln.pop();
    }
  }
}

