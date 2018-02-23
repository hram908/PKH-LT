import {FremdmittelBelastung} from './fremdmittel-belastung';
/**
 * @author: Isabella
 **/

export class RaumnutzungH{
  belegnummer: number;
  mieteOderZinsen: number;
  heizungskosten: number;
  uebrigeNebenkosten: number;
  gesamtbetrag: number;
  alleinigeZahlung: number;

  belastungAusFremdmitteln: FremdmittelBelastung[];
}

