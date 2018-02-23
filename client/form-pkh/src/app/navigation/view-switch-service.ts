import {IFormComponentBase} from '../common/i-form-component-base';
import {FormAComponent} from '../chatbot/form-a/form-a.component';
import {FormAMaterial} from '../formulardaten/form-a/form-a-material';
import {FormAPersonendatenComponent} from '../formular/form-a-personendaten/form-a-personendaten.component';
import {FormularService} from '../formular/formular-service';
import {ChatbotService} from '../chatbot/chatbot-service';
import {NavButtons} from './nav-buttons';
import {Injectable} from '@angular/core';
/**
 * @author Isabella
 **/
@Injectable()
export class ViewSwitchService {
  private _currentForm: string;
  public allNavButtons: string[];

  public constructor() {
    this._currentForm = NavButtons.num0;
    this.initializeNavButtons();
  }

  public get currentForm(): string{
    return this._currentForm;
  }

  private initializeNavButtons() {
    this.allNavButtons = [
      NavButtons.num0,
      NavButtons.num1,
      NavButtons.A,
      NavButtons.B,
      NavButtons.C,
      NavButtons.D,
      NavButtons.E,
      NavButtons.F,
      NavButtons.G,
      NavButtons.H,
      NavButtons.I,
      NavButtons.J
    ]
  }
}
