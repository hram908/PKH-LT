import {Component} from '@angular/core';
import {FormAMaterial} from '../../formulardaten/form-a-material';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-a-personendaten',
  templateUrl: './form-a-personendaten.component.html',
  styleUrls: ['./form-a-personendaten.component.css']
})
export class FormAPersonendatenComponent {
  static UNTERTITEL = 'Personendaten';

  constructor(public formA: FormAMaterial) {

  }

  getUntertitel(): string {
    return FormAPersonendatenComponent.UNTERTITEL;
  }
}
