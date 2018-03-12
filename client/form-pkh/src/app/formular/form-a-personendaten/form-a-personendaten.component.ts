import {Component} from '@angular/core';
import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';
import {Untertitel} from '../../common/untertitel';
import {Fragen} from '../../common/fragen';

@Component({
  selector: 'app-form-a-personendaten',
  templateUrl: './form-a-personendaten.component.html',
  styleUrls: ['./form-a-personendaten.component.css']
})
export class FormAPersonendatenComponent {
  constructor(public formA: FormAMaterial, public untertitel: Untertitel, public fragen: Fragen) {

  }
}
