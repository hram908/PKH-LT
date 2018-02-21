export class Abschnitt {
  id: string;
  ueberschrift: string;
  component: any;

  constructor(id: string, ueberschrift: string, component: any) {
    this.id = id;
    this.ueberschrift = ueberschrift;
    this.component = component;
  }
}
