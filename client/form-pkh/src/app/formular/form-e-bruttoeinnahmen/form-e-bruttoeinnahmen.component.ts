import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent implements OnInit {
  static UNTERTITEL = 'Bruttoeinnahmen';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormEBruttoeinnahmenComponent.UNTERTITEL;
  }
}
