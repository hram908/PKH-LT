/**
 * @author: Isabella
 **/
// TODO: ausführliche Kommentare warum Integer und die verschiedenen Bedeutungen/Zustände
export class FormBMaterial {
  hatKostentraeger = 0;
  hatRechtschutzversicherung = 0;
  uebernahme = -1;
  tlwUebernahme = '';
  tlwUebernahmeTyp = 'EUR';
  versicherung: string[]; // TODO
  antragGestellt = -1;
}
