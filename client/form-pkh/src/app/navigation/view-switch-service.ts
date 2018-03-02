import {EventEmitter, Injectable} from '@angular/core';
import {StepSpeicher} from '../stepSpeicher';
import {Abschnitt} from '../abschnitt';

/**
 * @author Isabella
 **/
@Injectable()
export class ViewSwitchService {
  private _currentAbschnitt: Abschnitt;

  public allNavButtonsString: string[];
  public formChanged: EventEmitter<Abschnitt>;

  public constructor(private stepSpeicher: StepSpeicher) {
    this._currentAbschnitt = this.stepSpeicher.abschnitte[0];
    this.allNavButtonsString = [];
    this.formChanged = new EventEmitter<Abschnitt>();
    this.initializeNavButtonStrings();
  }

  public get currentAbschnitt(): Abschnitt {
    return this._currentAbschnitt;
  }

  public set currentAbschnitt(abschnitt: Abschnitt) {
    this._currentAbschnitt = this.stepSpeicher.abschnitte.find(a => a.id === abschnitt.id);
    this.formChanged.emit(this._currentAbschnitt);
  }

  public get alleAbschnitte(): Abschnitt[] {
    return this.stepSpeicher.abschnitte;
  }

  public initializeNavButtonStrings() {
    this.allNavButtonsString = this.stepSpeicher.abschnitte.map(abschnitt => abschnitt.id);
  }
}
