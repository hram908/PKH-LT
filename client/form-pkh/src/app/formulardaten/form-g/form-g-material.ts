import {EintragG} from './eintrag-g';
/**
 * @author: Isabella
 **/

export class FormGMaterial {
  hatKonto = true;
  konto: EintragG[];
  hatGrundeigentum = false;
  grundeigentum: EintragG[];
  hatKraftfahrzeug = false;
  kraftfahrzeuge: EintragG[];
  hatWertgegenstaende = false;
  wertgegenstaende: EintragG[];
  hatVersicherung = false;
  versicherung: EintragG[];
  hatSonstige = false;
  sonstige: EintragG[];
}
