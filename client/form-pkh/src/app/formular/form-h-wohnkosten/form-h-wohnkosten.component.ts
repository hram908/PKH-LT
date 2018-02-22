import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-h-wohnkosten',
  templateUrl: './form-h-wohnkosten.component.html',
  styleUrls: ['./form-h-wohnkosten.component.css']
})
export class FormHWohnkostenComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormHWohnkostenComponent.UNTERTITEL;
  }
}
