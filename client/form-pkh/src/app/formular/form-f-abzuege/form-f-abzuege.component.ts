import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-f-abzuege',
  templateUrl: './form-f-abzuege.component.html',
  styleUrls: ['./form-f-abzuege.component.css']
})
export class FormFAbzuegeComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormFAbzuegeComponent.UNTERTITEL;
  }
}
