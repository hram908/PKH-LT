import {Component} from '@angular/core';
import {ViewSwitchService} from './view-switch-service';
import {FormBMaterial} from '../formulardaten/form-b/form-b-material';

@Component({
  selector: 'app-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.css']
})
/**
 * @author Isabella
 **/
export class ViewSwitchComponent {

  constructor(private viewSwitchService: ViewSwitchService, public formB: FormBMaterial) {
  }

  public get currentFormString(): string {
    return this.viewSwitchService.currentAbschnitt.id;
  }

  public get allNavButtons(): string[] {
    return this.viewSwitchService.allNavButtonsString;
  }

  public showForm(selectedFormString: string) {
    this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte.find(abschnitt => abschnitt.id === selectedFormString);
  }

  public showFormBefore() {
    // not the first form
    if (this.currentFormString !== this.allNavButtons[0]) {
      const indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) - 1;
      this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
    }
  }

  public showFormAfter() {
    const indexFormBefore: number = this.viewSwitchService.alleAbschnitte.indexOf(this.viewSwitchService.currentAbschnitt) + 1;
    this.viewSwitchService.currentAbschnitt = this.viewSwitchService.alleAbschnitte[indexFormBefore];
  }
}
