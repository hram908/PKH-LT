import {FremdmittelBelastung} from './fremdmittel-belastung';

/**
 * @author: Isabella, Jana
 **/

export class RaumnutzungH {
  mieteOderZinsen: number;
  heizungskosten: number;
  uebrigeNebenkosten: number;
  gesamtbetrag: number;
  alleinigeZahlung: number;

  hatBelastungAusFremdmitteln = false;
  belastungAusFremdmitteln: FremdmittelBelastung[] = [];
}

