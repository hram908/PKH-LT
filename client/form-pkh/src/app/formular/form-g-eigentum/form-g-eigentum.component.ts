import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormGMaterial} from '../../formulardaten/form-g/form-g-material';
import {Fragen} from '../../common/fragen';
import {EintragG} from '../../formulardaten/form-g/eintrag-g';

@Component({
  selector: 'app-form-g-eigentum',
  templateUrl: './form-g-eigentum.component.html',
  styleUrls: ['./form-g-eigentum.component.css']
})
export class FormGEigentumComponent implements IFormComponentBase {
  constructor(public formG: FormGMaterial) {
  }

  getFragen() {
    return Fragen;
  }

  getUntertitel(): string {
    return Untertitel.G;
  }

  fuegeHinzuKonto() {
    if (this.formG.konto.length <= 4) {
      this.formG.konto.push(new EintragG());
    }
  }

  entferneKonto() {
    if (this.formG.konto.length > 1) {
      this.formG.konto.pop();
    }
  }

  fuegeHinzuGrundeigentum() {
    if (this.formG.grundeigentum.length <= 4) {
      this.formG.grundeigentum.push(new EintragG());
    }
  }

  entferneGrundeigentum() {
    if (this.formG.grundeigentum.length > 1) {
      this.formG.grundeigentum.pop();
    }
  }

  fuegeHinzuKfz() {
    if (this.formG.kraftfahrzeuge.length <= 4) {
      this.formG.kraftfahrzeuge.push(new EintragG());
    }
  }

  entferneKfz() {
    if (this.formG.kraftfahrzeuge.length > 1) {
      this.formG.kraftfahrzeuge.pop();
    }
  }

  fuegeHinzuWertgegenstaende() {
    if (this.formG.wertgegenstaende.length <= 4) {
      this.formG.wertgegenstaende.push(new EintragG());
    }
  }

  entferneWertgegenstaende() {
    if (this.formG.wertgegenstaende.length > 1) {
      this.formG.wertgegenstaende.pop();
    }
  }

  fuegeHinzuVersicherung() {
    if (this.formG.versicherung.length <= 4) {
      this.formG.versicherung.push(new EintragG());
    }
  }

  entferneVersicherung() {
    if (this.formG.versicherung.length > 1) {
      this.formG.versicherung.pop();
    }
  }

  fuegeHinzuSonstiges() {
    if (this.formG.sonstige.length <= 4) {
      this.formG.sonstige.push(new EintragG());
    }
  }

  entferneSonstiges() {
    if (this.formG.sonstige.length > 1) {
      this.formG.sonstige.pop();
    }
  }
}

