import {RaumnutzungH} from './raumnutzung-h';

/**
 * @author: Isabella, Thomas, Jana
 **/

export class FormHMaterial {
  wohnraumgroesse = 0;
  anzahlZimmer = 0;
  personenImWohnraum = 0;

  istMieter = false;
  mietDaten: RaumnutzungH = new RaumnutzungH();

  istEigentuemer = false;
  eigentumsDaten: RaumnutzungH = new RaumnutzungH();
}
