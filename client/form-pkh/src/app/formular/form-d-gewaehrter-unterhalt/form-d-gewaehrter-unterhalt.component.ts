import {Component} from '@angular/core';
import {Untertitel} from '../../common/untertitel';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {FormDMaterial} from "../../formulardaten/form-d/form-d-material";
import {Fragen} from "../../common/fragen";
import {NaturalunterhaltRow} from "../../formulardaten/form-d/naturalunterhalt-row";


@Component({
  selector: 'app-form-d-gewaehrter-unterhalt',
  templateUrl: './form-d-gewaehrter-unterhalt.component.html',
  styleUrls: ['./form-d-gewaehrter-unterhalt.component.css']
})
export class FormDGewaehrterUnterhaltComponent implements IFormComponentBase{
  constructor(public formD: FormDMaterial,
              public formDNat: NaturalunterhaltRow) {
  }

  getUntertitel(): string {
    return Untertitel.D;
  }
  getFragen() {
    return Fragen;
  }
}
