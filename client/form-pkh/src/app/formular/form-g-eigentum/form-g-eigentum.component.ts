import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-g-eigentum',
  templateUrl: './form-g-eigentum.component.html',
  styleUrls: ['./form-g-eigentum.component.css']
})
export class FormGEigentumComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.G;
  }
}
