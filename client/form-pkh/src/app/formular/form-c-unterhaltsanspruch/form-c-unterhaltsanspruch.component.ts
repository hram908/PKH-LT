import { Component, OnInit } from '@angular/core';
import {StartfensterComponent} from '../startfenster/startfenster.component';

@Component({
  selector: 'app-form-c-unterhaltsanspruch',
  templateUrl: './form-c-unterhaltsanspruch.component.html',
  styleUrls: ['./form-c-unterhaltsanspruch.component.css']
})
export class FormCUnterhaltsanspruchComponent implements OnInit {
  static UNTERTITEL = 'Startfenster';
  constructor() { }

  ngOnInit() {
  }

  getUntertitel(): string {
    return FormCUnterhaltsanspruchComponent.UNTERTITEL;
  }
}
