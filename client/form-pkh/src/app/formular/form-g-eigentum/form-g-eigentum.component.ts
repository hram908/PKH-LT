import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-g-eigentum',
  templateUrl: './form-g-eigentum.component.html',
  styleUrls: ['./form-g-eigentum.component.css']
})
export class FormGEigentumComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.G;
  }
}
