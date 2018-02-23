import {Component, OnInit} from '@angular/core';
import {ViewSwitchService} from './view-switch-service';

@Component({
  selector: 'app-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.css']
})
export class ViewSwitchComponent {
  public allNavButtons: string[];

  constructor(private viewSwitchService: ViewSwitchService) {
    this.allNavButtons = this.viewSwitchService.allNavButtons;
    console.log(this.allNavButtons)
  }
}
