import {Component} from '@angular/core';
import { AllgemeineDaten } from '../../allgemeineDaten';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-startfenster',
  templateUrl: './startfenster.component.html',
  styleUrls: ['./startfenster.component.css']
})
export class StartfensterComponent {

  constructor(public allgemeineDaten: AllgemeineDaten, public untertitel: Untertitel) {
  }
}
