import {Abzuege} from './abzuege';

export class TypAbzuege {
  steuern: Abzuege = new Abzuege();
  sozialversicherung: Abzuege = new Abzuege();
  sonstigeVersicherungen: Abzuege = new Abzuege();
  arbeitsfahrtkosten: Abzuege = new Abzuege();
  werbungskosten: Abzuege = new Abzuege();
}
