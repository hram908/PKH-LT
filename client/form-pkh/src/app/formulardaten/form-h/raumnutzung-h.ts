import {FremdmittelBelastung} from './fremdmittel-belastung';
/**
 * @author: Isabella
 **/

export class RaumnutzungH {
  mieteOderZinsen: number;
  heizungskosten: number;
  uebrigeNebenkosten: number;
  gesamtbetrag: number;
  alleinigeZahlung: number;

  belastungAusFremdmitteln: FremdmittelBelastung[];
}

