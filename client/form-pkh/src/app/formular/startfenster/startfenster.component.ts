import {Component} from '@angular/core';
import { AllgemeineDaten } from '../../allgemeineDaten';

@Component({
  selector: 'app-startfenster',
  templateUrl: './startfenster.component.html',
  styleUrls: ['./startfenster.component.css']
})
export class StartfensterComponent {

  constructor(public allgemeineDaten: AllgemeineDaten) {
  }
}
