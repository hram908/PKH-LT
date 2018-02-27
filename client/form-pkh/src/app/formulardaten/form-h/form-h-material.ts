import {RaumnutzungH} from './raumnutzung-h';
/**
 * @author: Isabella
 **/

export class FormHMaterial {
  wohnraumgroesse: [number, number]; // second one is the 'Belegnummer'
  zimmeranzahl: number;
  personenImWohnraum: [number, number]; // second one is the 'Belegnummer'
  mieterNutzung: RaumnutzungH;
  eigentumsNutzung: RaumnutzungH;
  mieter = false;
  IstMieter = '';
  groesse = '';
  uebrigeNebenkosten = '';
  heizungskosten = '';
  zinsenUndTilgung = '';
  dahrlen = '';
  zahleAlleine = '';
  gesamtBetrag = '';
}
