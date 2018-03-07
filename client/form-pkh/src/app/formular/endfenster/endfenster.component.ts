import {Component, EventEmitter} from '@angular/core';
import {IFormComponentBase} from '../../common/i-form-component-base';
import {PkhMaterial} from '../../formulardaten/pkh-material';
import {FormularService} from '../../formular-api/formular-service';
import {PrognoseService} from './prognose-service';
import {Notiz} from '../../formulardaten/notiz';

@Component({
  selector: 'app-endfenster',
  templateUrl: './endfenster.component.html',
  styleUrls: ['./endfenster.component.css']
})
export class EndfensterComponent implements IFormComponentBase {
  public linkAktiv = false;

  constructor(private formularService: FormularService, public pkhForm: PkhMaterial, public notiz: Notiz) {

  }

  getUntertitel(): string {
    return 'Generieren des PDFs';
  }

  public sendFormularToServer() {
    this.formularService.sendeFormularAnServer(this.pkhForm);
    this.linkAktiv = true;
  }
}
