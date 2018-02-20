import { Component } from '@angular/core';
import { FormData} from './formData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prozesskostenhilfe Helfer';
  constructor(public formData: FormData) {
  }
}
