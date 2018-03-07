import {FremdmittelBelastung} from './fremdmittel-belastung';

/**
 * @author: Isabella, Jana
 **/

export class RaumnutzungH {
  mieteOderZinsen = 0;
  heizungskosten = 0;
  uebrigeNebenkosten = 0;
  gesamtbetrag = 0;
  alleinigeZahlung = 0;

  hatBelastungAusFremdmitteln = false;
  belastungAusFremdmitteln: FremdmittelBelastung[] = [new FremdmittelBelastung()];
}

