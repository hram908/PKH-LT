import {Component} from '@angular/core';
import { Formulardaten } from '../../formulardaten';

@Component({
  selector: 'app-form-a-personendaten',
  templateUrl: './form-a-personendaten.component.html',
  styleUrls: ['./form-a-personendaten.component.css']
})
export class FormAPersonendatenComponent {

  constructor(public formulardaten: Formulardaten) { }

}
