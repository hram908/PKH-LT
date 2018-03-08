import {Component} from '@angular/core';
import {PkhMaterial} from '../../formulardaten/pkh-material';
import {FormularService} from '../../formular-api/formular-service';
import {Notiz} from '../../formulardaten/notiz';
import {Untertitel} from '../../common/untertitel';

@Component({
  selector: 'app-endfenster',
  templateUrl: './endfenster.component.html',
  styleUrls: ['./endfenster.component.css']
})
export class EndfensterComponent {
  public linkAktiv = false;

  constructor(private formularService: FormularService, public pkhForm: PkhMaterial,
              public notiz: Notiz, public untertitel: Untertitel) {

  }

  public sendFormularToServer() {
    this.formularService.sendeFormularAnServer(this.pkhForm);
    this.linkAktiv = true;
  }
}
