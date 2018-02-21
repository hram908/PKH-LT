import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent{

  private readonly DefaultText: string = "Wie kann ich Ihnen helfen?";

  public chatbotText: string;
  public lastUserInput: string;

  constructor() {
    this.chatbotText = this.DefaultText;
    this.lastUserInput = "";
  }

  public onUserInput(){
    console.log("Do something: " + this.lastUserInput);
  }
}
