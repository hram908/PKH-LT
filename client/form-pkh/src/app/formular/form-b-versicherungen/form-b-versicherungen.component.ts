import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormBMaterial} from '../../formulardaten/form-b/form-b-material';
import {Fragen} from '../../common/fragen';
import {Notiz} from '../../formulardaten/notiz';
import {FremdmittelBelastung} from '../../formulardaten/form-h/fremdmittel-belastung';

@Component({
  selector: 'app-form-b-versicherungen',
  templateUrl: './form-b-versicherungen.component.html',
  styleUrls: ['./form-b-versicherungen.component.css']
})
export class FormBVersicherungenComponent implements IFormComponentBase {
  constructor(public formB: FormBMaterial, public notiz: Notiz) {
  }

  getUntertitel(): string {
    return Untertitel.B;
  }

  getFragen() {
    return Fragen;
  }

  setNotiz() {
    this.notiz.b.notiz = 'Mögliche Kostenträger prüfen.';
    console.log(this.notiz.b.notiz);
  }

  fuegeHinzuVersicherung() {
    if (this.formB.versicherung.length < 9) {
      this.formB.versicherung.push({versicherung: ''});
    }
  }

  entferneVersicherung() {
    if (this.formB.versicherung.length > 1) {
      this.formB.versicherung.pop();
    }
  }
}
