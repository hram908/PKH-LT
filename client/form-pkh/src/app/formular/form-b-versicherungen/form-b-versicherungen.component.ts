import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormBMaterial} from '../../formulardaten/form-b/form-b-material';
import {Fragen} from '../../common/fragen';
import {Notiz} from '../../formulardaten/notiz';

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
    this.notiz.B.notiz = 'Mögliche Kostenträger prüfen.';
    console.log(this.notiz.B.notiz);
  }
}
