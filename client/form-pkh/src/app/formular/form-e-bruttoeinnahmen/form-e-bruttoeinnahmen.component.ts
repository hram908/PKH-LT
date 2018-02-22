import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-form-e-bruttoeinnahmen',
  templateUrl: './form-e-bruttoeinnahmen.component.html',
  styleUrls: ['./form-e-bruttoeinnahmen.component.css']
})
export class FormEBruttoeinnahmenComponent {
  constructor() {
  }

  getUntertitel(): string {
    return Untertitel.E;
  }
}
