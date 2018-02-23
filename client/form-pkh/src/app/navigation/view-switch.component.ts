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

  public get currentForm(): string{
    return this.viewSwitchService.currentForm;
  }

  public get allNavButtons(): string[]{
    return this.viewSwitchService.allNavButtons;
  }

  public showForm(form: NavButtons){
    // TODO
  }
}
