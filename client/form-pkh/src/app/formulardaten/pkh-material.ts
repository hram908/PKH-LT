import {FormAMaterial} from './form-a/form-a-material';
import {FormBMaterial} from './form-b/form-b-material';
import {FormCMaterial} from './form-c/form-c-material';
import {FormDMaterial} from './form-d/form-d-material';
import {FormEMaterial} from './form-e/form-e-material';
import {FormFMaterial} from './form-f/form-f-material';
import {FormGMaterial} from './form-g/form-g-material';
import {FormHMaterial} from './form-h/form-h-material';
import {FormIMaterial} from './form-i/form-i-material';
import {FormJMaterial} from './form-j/form-j-material';
import {Injectable} from '@angular/core';
import {Notiz} from './notiz';

/**
 * @author Isabella
 **/
@Injectable()
export class PkhMaterial {
  constructor(public abschnittA: FormAMaterial,
              public abschnittB: FormBMaterial,
              public abschnittC: FormCMaterial,
              public abschnittD: FormDMaterial,
              public abschnittE: FormEMaterial,
              public abschnittF: FormFMaterial,
              public abschnittG: FormGMaterial,
              public abschnittH: FormHMaterial,
              public abschnittI: FormIMaterial,
              public abschnittJ: FormJMaterial,
              public notiz: Notiz) {
  }
}
