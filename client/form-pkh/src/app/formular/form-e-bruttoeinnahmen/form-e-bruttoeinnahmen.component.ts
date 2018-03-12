import {Component} from '@angular/core';
import {FormEMaterial} from '../../formulardaten/form-e/form-e-material';
import {Fragen} from '../../common/fragen';
import {Untertitel} from '../../common/untertitel';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent {
  constructor(public formE: FormEMaterial, public formA: FormAMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }
}
