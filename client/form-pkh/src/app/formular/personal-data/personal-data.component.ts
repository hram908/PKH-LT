import { Component, OnInit } from '@angular/core';
import { FormData } from '../formData';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  constructor(public formData: FormData) { }

  ngOnInit() {
  }

}
