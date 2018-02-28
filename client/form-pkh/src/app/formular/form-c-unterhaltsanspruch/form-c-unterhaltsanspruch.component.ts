import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormCMaterial} from '../../formulardaten/form-c/form-c-material';
import {Fragen} from '../../common/fragen';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';


@Component({
  selector: 'app-form-c-unterhaltsanspruch',
  templateUrl: './form-c-unterhaltsanspruch.component.html',
  styleUrls: ['./form-c-unterhaltsanspruch.component.css']
})
export class FormCUnterhaltsanspruchComponent implements IFormComponentBase {
  constructor(public formC: FormCMaterial,
              public formA: FormAMaterial) {
    if (formA.antragsteller.familienstand === 'Eingetragene Partnerschaft' || formA.antragsteller.familienstand === 'Verheiratet') {
      this.fuegeUnterhaltHinzu();
    }
  }

  getUntertitel(): string {
    return Untertitel.C;
  }

  getFragen() {
    return Fragen;
  }

  fuegeUnterhaltHinzu() {
    this.formC.unterhaltsverpflichteter.push('');
  }
}



