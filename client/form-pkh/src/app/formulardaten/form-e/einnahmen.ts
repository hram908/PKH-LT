import {WeitereEinnahmenE} from './weitere-einnahmen-e';

export class Einnahmen {
  weitereEinnahmen: WeitereEinnahmenE[] = [];

  hatNichtselbstarbeit = false;
  nichtselbstarbeit = 0;

  hatSelbstarbeit = false;
  selbstarbeit = 0;

  hatVermietung = false;
  vermietung = 0;

  hatKapital = false;
  kapital = 0;

  hatWohngeld = false;
  wohngeld = 0;

  hatUnterhalt = false;
  unterhalt = 0;

  hatRente = false;
  rente = 0;

  hatArbeitslosg1 = false;
  arbeitslosg1 = 0;

  hatArbeitslosg2 = false;
  arbeitslosg2 = 0;

  hatKrankengeld = false;
  krankengeld = 0;

  hatElterngeld = false;
  elterngeld = 0;

  hatKindergeld = false;
  kindergeld = 0;
}
