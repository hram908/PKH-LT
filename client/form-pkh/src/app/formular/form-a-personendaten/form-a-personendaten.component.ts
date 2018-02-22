import {Component} from '@angular/core';
import {FormAMaterial} from '../../formulardaten/form-a-material';

@Component({
  selector: 'app-form-a-personendaten',
  templateUrl: './form-a-personendaten.component.html',
  styleUrls: ['./form-a-personendaten.component.css']
})
export class FormAPersonendatenComponent {
  static UNTERTITEL = 'Personendaten';

  constructor(public formA: FormAMaterial) {

  }

}
