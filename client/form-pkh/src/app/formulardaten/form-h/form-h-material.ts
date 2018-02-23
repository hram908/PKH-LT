import {RaumnutzungH} from './raumnutzung-h';

export class FormHMaterial {
  wohnraumgroesse: [number, number]; // second one is the 'Belegnummer'
  zimmeranzahl: number;
  personenImWohnraum: [number, number];// second one is the 'Belegnummer'
  mieterNutzung: RaumnutzungH;
  eigentumsNutzung: RaumnutzungH;
}
