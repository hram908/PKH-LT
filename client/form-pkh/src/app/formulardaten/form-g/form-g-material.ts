import {EintragG} from './eintrag-g';

/**
 * @author: Isabella, Thomas, Jana
 **/

export class FormGMaterial {
  hatKonto = true;
  konto: EintragG[] = [new EintragG()];
  hatGrundeigentum = false;
  grundeigentum: EintragG[] = [new EintragG()];
  hatKraftfahrzeug = false;
  kraftfahrzeuge: EintragG[] = [new EintragG()];
  hatWertgegenstaende = false;
  wertgegenstaende: EintragG[] = [new EintragG()];
  hatVersicherung = false;
  versicherung: EintragG[] = [new EintragG()];
  hatSonstige = false;
  sonstige: EintragG[] = [new EintragG()];
}
