import {Component} from '@angular/core';
import { Formulardaten } from '../../formulardaten';

@Component({
  selector: 'app-personendaten',
  templateUrl: './personendaten.component.html',
  styleUrls: ['./personendaten.component.css']
})
export class PersonendatenComponent {

  constructor(public formulardaten: Formulardaten) { }

}
