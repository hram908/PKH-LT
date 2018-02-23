import {EinnahmenE} from './einnahmen-e';
import {WeitereEinnahmenE} from './weitere-einnahmen-e';

export class FormEMaterial {
  einnahmen: EinnahmenE[];
  weitereEinnahmen: WeitereEinnahmenE[];
  public constructor(){
    this.einnahmen.length = 12;
    // should have length 12
  }
}
