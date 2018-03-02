import {Vermoegen} from './vermoegen';

/**
 * @author: Isabella, Thomas, Jana
 **/

export class FormGMaterial {
  hatKonto = true;
  konto: Vermoegen[] = [new Vermoegen()];
  hatGrundeigentum = false;
  grundeigentum: Vermoegen[] = [new Vermoegen()];
  hatKraftfahrzeuge = false;
  kraftfahrzeuge: Vermoegen[] = [new Vermoegen()];
  hatWertgegenstaende = false;
  wertgegenstaende: Vermoegen[] = [new Vermoegen()];
  hatVersicherung = false;
  versicherung: Vermoegen[] = [new Vermoegen()];
  hatSonstige = false;
  sonstige: Vermoegen[] = [new Vermoegen()];
}
