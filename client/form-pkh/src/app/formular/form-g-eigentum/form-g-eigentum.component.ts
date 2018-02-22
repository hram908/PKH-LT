import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-g-eigentum',
  templateUrl: './form-g-eigentum.component.html',
  styleUrls: ['./form-g-eigentum.component.css']
})
export class FormGEigentumComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormGEigentumComponent.UNTERTITEL;
  }
}
