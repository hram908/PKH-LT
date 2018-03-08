import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {FormCMaterial} from '../../formulardaten/form-c/form-c-material';
import {Fragen} from '../../common/fragen';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';


@Component({
  selector: 'app-form-c-unterhaltsanspruch',
  templateUrl: './form-c-unterhaltsanspruch.component.html',
  styleUrls: ['./form-c-unterhaltsanspruch.component.css']
})
export class FormCUnterhaltsanspruchComponent {
  constructor(public formC: FormCMaterial,
              public formA: FormAMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }

  fuegeUnterhaltHinzu() {
    if (this.formC.verpflichteter.length < 6) {
      this.formC.verpflichteter.push({verpflichteter: ''});
    }
  }

  entferneUnterhalt() {
    if (this.formC.verpflichteter.length > 1) {
      this.formC.verpflichteter.pop();
    }
  }
}



