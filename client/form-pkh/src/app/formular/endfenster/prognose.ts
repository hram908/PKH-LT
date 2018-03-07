import {FormAMaterial} from '../../formulardaten/form-a/form-a-material';
import {FormDMaterial} from '../../formulardaten/form-d/form-d-material';
import {FormEMaterial} from '../../formulardaten/form-e/form-e-material';
import {FormFMaterial} from '../../formulardaten/form-f/form-f-material';
import {FormGMaterial} from '../../formulardaten/form-g/form-g-material';
import {FormHMaterial} from '../../formulardaten/form-h/form-h-material';
import {FormIMaterial} from '../../formulardaten/form-i/form-i-material';
import {FormJMaterial} from '../../formulardaten/form-j/form-j-material';

export class FormPMaterial {
  freibetragRechtssuchende = 481;
  freibetragRechtssuchendeArbeit = 219;
  freibetragUnterhaltEhegatte = 481;
  freibetragEhegatteArbeit = 219;
  freibetragKindUnter5 = 275;
  freibetragKindUnter14 = 339;
  freibetragKindUnter18 = 364;
  freibetragKindUeber18 = 383;
  freibetragVermoegen = 2600;
  Prozesskosten = 262.68;

  public constructor(public formE: FormEMaterial, public formG: FormGMaterial, public formD: FormDMaterial,
                     public formF: FormFMaterial, public formH: FormHMaterial, public formI: FormIMaterial,
                     public formJ: FormJMaterial, public formA: FormAMaterial) {
  }

  public berechneE(): number {
    if (this.formA.antragsteller.familienstand === 'Eingetragene Partnerschaft' ||
      this.formA.antragsteller.familienstand === 'Verheiratet') {
      return this.formE.antragsteller.nichtselbstarbeit + this.formE.antragsteller.selbstarbeit + this.formE.antragsteller.vermietung +
        this.formE.antragsteller.kapital + this.formE.antragsteller.wohngeld + this.formE.antragsteller.unterhalt +
        this.formE.antragsteller.rente + this.formE.antragsteller.arbeitslosg1 + this.formE.antragsteller.arbeitslosg2 +
        this.formE.antragsteller.krankengeld + this.formE.antragsteller.elterngeld +
        this.formE.antragsteller.kindergeld + this.formE.ehepartner.nichtselbstarbeit + this.formE.ehepartner.selbstarbeit +
        this.formE.ehepartner.vermietung + this.formE.ehepartner.kapital + this.formE.ehepartner.wohngeld +
        this.formE.ehepartner.unterhalt + this.formE.ehepartner.rente + this.formE.ehepartner.arbeitslosg1 +
        this.formE.ehepartner.arbeitslosg2 + this.formE.ehepartner.krankengeld + this.formE.ehepartner.elterngeld +
        this.formE.ehepartner.kindergeld - this.freibetragRechtssuchende - this.freibetragUnterhaltEhegatte;
    } else {
      return this.formE.antragsteller.nichtselbstarbeit + this.formE.antragsteller.selbstarbeit + this.formE.antragsteller.vermietung +
        this.formE.antragsteller.kapital + this.formE.antragsteller.wohngeld + this.formE.antragsteller.unterhalt +
        this.formE.antragsteller.rente + this.formE.antragsteller.arbeitslosg1 + this.formE.antragsteller.arbeitslosg2 +
        this.formE.antragsteller.krankengeld + this.formE.antragsteller.elterngeld +
        this.formE.antragsteller.kindergeld - this.freibetragRechtssuchende;
    }
  }

  public berechneG(): number {
    let result = 0;
    this.formG.konto.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.grundeigentum.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.kraftfahrzeuge.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.wertgegenstaende.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.wertgegenstaende.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.versicherung.forEach(vermoegen => result += vermoegen.vermoegen);
    this.formG.sonstige.forEach(vermoegen => result += vermoegen.vermoegen);
    result -= this.freibetragVermoegen;
    return result < 0 ? 0 : result;
  }

  public berechneD(): number {
    let result = 0;
    this.formD.naturalunterhalt.forEach(naturalunterhalt => result += naturalunterhalt.monatsbetrag);
    return result;
  }

  public berechneF(): number {
    if (this.formA.antragsteller.familienstand === 'Eingetragene Partnerschaft' ||
      this.formA.antragsteller.familienstand === 'Verheiratet') {
      return this.formF.antragsteller.steuern.betrag + this.formF.antragsteller.sozialversicherung.betrag +
        this.formF.antragsteller.sonstigeVersicherungen.betrag + this.formF.antragsteller.arbeitsfahrtkosten.betrag +
        this.formF.antragsteller.werbungskosten.betrag +
        this.formF.ehepartner.steuern.betrag + this.formF.ehepartner.sozialversicherung.betrag +
        this.formF.ehepartner.sonstigeVersicherungen.betrag + this.formF.ehepartner.arbeitsfahrtkosten.betrag +
        this.formF.ehepartner.werbungskosten.betrag;
    } else {
      return this.formF.antragsteller.steuern.betrag + this.formF.antragsteller.sozialversicherung.betrag +
        this.formF.antragsteller.sonstigeVersicherungen.betrag + this.formF.antragsteller.arbeitsfahrtkosten.betrag +
        this.formF.antragsteller.werbungskosten.betrag;
    }
  }

  public berechneH(): number {
    return this.formH.mietDaten.mieteOderZinsen + this.formH.mietDaten.heizungskosten + this.formH.mietDaten.uebrigeNebenkosten
      + this.formH.mietDaten.alleinigeZahlung + this.formH.eigentumsDaten.mieteOderZinsen + this.formH.eigentumsDaten.heizungskosten +
      this.formH.eigentumsDaten.uebrigeNebenkosten + this.formH.eigentumsDaten.alleinigeZahlung;
  }

  public berechneI(): number {
    let result = 0;
    this.formI.zahlungsverpflichtungen.forEach(zahlungsverplfichtung => result += zahlungsverplfichtung.alleinigeZahlung);
    return result;
  }

  public berechneJ(): number {
    let result = 0;
    this.formJ.besondereBelastungen.forEach(besondereBelastung => result += besondereBelastung.alleinigeZahlung);
    return result;
  }

  public berechneAntragstellerAtrbeit(): number {
    let result = 0;
    if (this.formE.antragsteller.nichtselbstarbeit !== 0 || this.formE.antragsteller.selbstarbeit !== 0) {
      result = result - this.freibetragRechtssuchendeArbeit;
      return result;
    } else {
      return result;
    }
  }

  public berechneEhegatteAtrbeit(): number {
    let result = 0;
    if (this.formE.ehepartner.nichtselbstarbeit !== 0 || this.formE.ehepartner.selbstarbeit !== 0) {
      result = result - this.freibetragEhegatteArbeit;
      return result;
    } else {
      return result;
    }
  }

  public berechnePrognoseFormel(): number {
    return this.berechneE() + this.berechneG() - this.berechneF() - this.berechneD() - this.berechneH() -
      this.berechneI() - this.berechneJ() - this.berechneEhegatteAtrbeit() - this.berechneAntragstellerAtrbeit();
  }

  public brechnePrognoseVemoegen(): number {
    return this.berechnePrognoseFormel() * 5 / 2;
  }

  public gibtPrognose(): string {
    if (this.brechnePrognoseVemoegen() >= this.Prozesskosten) {
      return 'Es ist unwahrscheinlich, dass Sie Prozesskostenhilfe bekommen';
    } else {
      return 'Es ist wahrscheinlich, dass Sie Porzesskostenhilfe bekommen';
    }
  }
}
