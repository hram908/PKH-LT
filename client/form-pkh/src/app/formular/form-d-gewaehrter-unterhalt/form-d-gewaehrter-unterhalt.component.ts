import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {FormDMaterial} from '../../formulardaten/form-d/form-d-material';
import {Fragen} from '../../common/fragen';
import {NaturalunterhaltRow} from '../../formulardaten/form-d/naturalunterhalt-row';

@Component({
  selector: 'app-form-d-gewaehrter-unterhalt',
  templateUrl: './form-d-gewaehrter-unterhalt.component.html',
  styleUrls: ['./form-d-gewaehrter-unterhalt.component.css']
})
export class FormDGewaehrterUnterhaltComponent {
  constructor(public formD: FormDMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }

  fuegeUnterhaltHinzu() {
    this.formD.naturalunterhalt.push(new NaturalunterhaltRow());
  }

  entferneUnterhalt() {
    this.formD.naturalunterhalt.pop();
  }
}
