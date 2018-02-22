import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-i-sonstige-verpflichtungen',
  templateUrl: './form-i-sonstige-verpflichtungen.component.html',
  styleUrls: ['./form-i-sonstige-verpflichtungen.component.css']
})
export class FormISonstigeVerpflichtungenComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormISonstigeVerpflichtungenComponent.UNTERTITEL;
  }
}
