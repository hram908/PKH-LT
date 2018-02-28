import {EintragG} from './eintrag-g';
/**
 * @author: Isabella
 **/

export class FormGMaterial {
  hatKonto = true;
  kontoBezeichnung: EintragG[];
  kontoBetrag: EintragG[];
  hatGrundeigentum = false;
  grundeigentumBezeichnung: EintragG[];
  grundeigentumBetrag: EintragG[];
  hatKraftfahrzeug = false;
  kraftfahrzeugeBezeichnung: EintragG[];
  kraftfahrzeugeBetrag: EintragG[];
  hatWertgegenstaende = false;
  wertgegenstaendeBezeichnung: EintragG[];
  wertgegenstaendeBetrag: EintragG[];
  hatVersicherung = false;
  versicherungBezeichnung: EintragG[];
  versicherungBetrag: EintragG[];
  hatSonstige = false;
  sonstige: EintragG[];
  sonstigeBezeichnung: EintragG[];
  sonstigeBetrag: EintragG[];
}
