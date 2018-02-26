import {Component, OnInit} from '@angular/core';
import {ViewSwitchService} from './view-switch-service';
import {NavButtons} from './nav-buttons';

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

  public get currentForm(): string {
    return this.viewSwitchService.currentForm;
  }

  public get allNavButtons(): string[] {
    return this.viewSwitchService.allNavButtons;
  }

  public showFormBefore() {
    // not the first form
    if (this.currentForm != this.allNavButtons[0]) {
      let formBefore: string = this.allNavButtons[this.allNavButtons[this.allNavButtons.indexOf(this.viewSwitchService.currentForm) - 1]];
      this.viewSwitchService.currentForm = formBefore;
    }
  }

  public showFormAfter() {
    // not the last form
    if (this.currentForm != this.allNavButtons[this.allNavButtons.length - 1]) {
      let formAfter: string = this.allNavButtons[this.allNavButtons[this.allNavButtons.indexOf(this.viewSwitchService.currentForm) + 1]];
      this.viewSwitchService.currentForm = formAfter;
    }
  }

  public showForm(form: NavButtons) {
    this.viewSwitchService.currentForm = form;
  }
}
