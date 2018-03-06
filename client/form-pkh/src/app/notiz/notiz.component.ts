import { Component } from '@angular/core';
import {Notiz} from '../formulardaten/notiz';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Abschnitt} from '../abschnitt';
import {ChatbotFragen} from '../common/chatbot-fragen';
import {NotizMaterial} from '../formulardaten/notiz-material';
import {NotizService} from './notiz-service';

@Component({
  selector: 'app-notiz',
  templateUrl: './notiz.component.html',
  styleUrls: ['./notiz.component.css']
})
export class NotizComponent{
  public notizIsActive: boolean;



  constructor(private service: NotizService) {
    this.notizIsActive = false;

  }

  public get activeNotizFeld(): string{
    return this.service.activeNotiz.notiz;
  }

  public toggleNotiz(){
    this.notizIsActive = !this.notizIsActive;
  }

}
