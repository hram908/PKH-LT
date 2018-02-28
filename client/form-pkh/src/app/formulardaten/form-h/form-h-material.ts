import {RaumnutzungH} from './raumnutzung-h';

/**
 * @author: Isabella
 **/

export class FormHMaterial {
  wohnraumgroesse = 0;
  anzahlZimmer = 0;
  personenImWohnraum = 0;

  istMieter = false;
  mietDaten: RaumnutzungH;

  istEigentuemer = false;
  eigentumsDaten: RaumnutzungH;
}
