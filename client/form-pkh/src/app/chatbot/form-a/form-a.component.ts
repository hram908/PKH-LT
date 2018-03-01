import { Component } from '@angular/core';

@Component({
  selector: 'app-form-a',
  templateUrl: './form-a.component.html',
  styleUrls: ['./form-a.component.css']
})
export class FormAComponent {

  private readonly DefaultText: string = 'Kann ich Ihnen helfen?';

  public chatbotText: string;
  public lastUserInput: string;

  constructor() {
    this.chatbotText = this.DefaultText;
    this.lastUserInput = '';
  }
}
