import {Abschnitt} from './abschnitt';

export class AllgemeineDaten {
  istAntragsteller = true;
  hatEhepartner = false;
  kinder = 0;
  aktuellerAbschnitt: Abschnitt;
  abschnitte: Abschnitt[] = [];

  constructor() {
    this.abschnitte.push(new Abschnitt('0', 'Beginn'));
    this.abschnitte.push(new Abschnitt('A', 'Personendaten'));
    this.abschnitte.push(new Abschnitt('B', 'Beginn2'));
    this.abschnitte.push(new Abschnitt('C', 'Beginn3'));
    this.abschnitte.push(new Abschnitt('D', 'Beginn4'));
    this.abschnitte.push(new Abschnitt('E', 'Beginn5'));
    this.abschnitte.push(new Abschnitt('F', 'Beginn6'));
    this.abschnitte.push(new Abschnitt('G', 'Beginn7'));
    this.abschnitte.push(new Abschnitt('H', 'Beginn8'));
    this.abschnitte.push(new Abschnitt('I', 'Beginn9'));
    this.abschnitte.push(new Abschnitt('J', 'Beginn10'));
    this.abschnitte.push(new Abschnitt('K', 'Beginn11'));
  }
}
