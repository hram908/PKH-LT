import { Component } from '@angular/core';

@Component({
  selector: 'app-notiz',
  templateUrl: './notiz.component.html',
  styleUrls: ['./notiz.component.css']
})
export class NotizComponent{
  public notizIsActive: boolean;

  constructor() {
    this.notizIsActive = false;
  }

  public toggleNotiz(){
    this.notizIsActive = !this.notizIsActive;
  }

}
