import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-c-unterhaltsanspruch',
  templateUrl: './form-c-unterhaltsanspruch.component.html',
  styleUrls: ['./form-c-unterhaltsanspruch.component.css']
})
export class FormCUnterhaltsanspruchComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.C;
  }
}
