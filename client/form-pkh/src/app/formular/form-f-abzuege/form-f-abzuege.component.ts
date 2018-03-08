import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {FormFMaterial} from '../../formulardaten/form-f/form-f-material';
import {Fragen} from '../../common/fragen';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})

export class FormFAbzuegeComponent {
  constructor(public formF: FormFMaterial, public formA: FormAMaterial, public untertitel: Untertitel, public fragen: Fragen) {
  }
}
