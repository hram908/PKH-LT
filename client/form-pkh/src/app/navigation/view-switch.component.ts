import {Component, OnInit} from '@angular/core';
import {ViewSwitchService} from './view-switch-service';
import {NavButtons} from './nav-buttons';
import {Abschnitt} from '../abschnitt';

@Component({
  selector: 'app-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.css']
})
/**
 * @author Isabella
 **/
export class ViewSwitchComponent {

  constructor(private viewSwitchService: ViewSwitchService) {
  }

  public get currentFormString(): string {
    return this.viewSwitchService.currentAbschnitt.id;
  }

  public get allNavButtons(): string[] {
    return this.viewSwitchService.allNavButtonsString;
  }

  public showFormBefore() {
    // not the first form
    if (this.currentFormString != this.allNavButtons[0]) {
      let indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) - 1;
      this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
    }
  }

  public showFormAfter() {
    let indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) + 1;
    this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
  }
}
