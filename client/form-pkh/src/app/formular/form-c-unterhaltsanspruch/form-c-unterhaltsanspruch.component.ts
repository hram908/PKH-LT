import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormCMaterial} from "../../formulardaten/form-c/form-c-material";


@Component({
  selector: 'app-form-c-unterhaltsanspruch',
  templateUrl: './form-c-unterhaltsanspruch.component.html',
  styleUrls: ['./form-c-unterhaltsanspruch.component.css']
})
export class FormCUnterhaltsanspruchComponent implements IFormComponentBase{
  constructor(public formC: FormCMaterial) {
  }

  getUntertitel(): string {
    return Untertitel.C;
  }
}



