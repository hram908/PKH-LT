import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormBase} from '../../common/i-form-base';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent implements IFormBase{
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.E;
  }
}
