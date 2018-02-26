import {Component, OnInit} from '@angular/core';
import { AllgemeineDaten } from '../../allgemeineDaten';
import {IFormComponentBase} from '../../common/i-form-component-base';

@Component({
  selector: 'app-startfenster',
  templateUrl: './startfenster.component.html',
  styleUrls: ['./startfenster.component.css']
})
export class StartfensterComponent implements OnInit, IFormComponentBase {
  static UNTERTITEL = 'Startfenster';

  constructor(public allgemeineDaten: AllgemeineDaten) {
  }

  ngOnInit() {
  }

  getUntertitel(): string {
    return StartfensterComponent.UNTERTITEL;
  }
}
