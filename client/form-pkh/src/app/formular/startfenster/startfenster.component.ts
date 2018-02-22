import {Component, OnInit} from '@angular/core';
import { AllgemeineDaten } from '../../allgemeineDaten';

@Component({
  selector: 'app-startfenster',
  templateUrl: './startfenster.component.html',
  styleUrls: ['./startfenster.component.css']
})
export class StartfensterComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';

  constructor(public allgemeineDaten: AllgemeineDaten) {
  }

  ngOnInit() {
  }
}
