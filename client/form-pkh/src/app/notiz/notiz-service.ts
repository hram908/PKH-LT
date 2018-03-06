import {Abschnitt} from '../abschnitt';
import {NotizMaterial} from '../formulardaten/notiz-material';
import {ViewSwitchService} from '../navigation/view-switch-service';
import {Notiz} from '../formulardaten/notiz';
import {Injectable} from '@angular/core';

@Injectable()
export class NotizService {

  private notizMap: Map<string, NotizMaterial>
  private _activeNotiz: NotizMaterial;

  public constructor(public notiz: Notiz, private viewSwitchService: ViewSwitchService) {
    this._activeNotiz = new NotizMaterial();
    this.notizMap = new Map<string, NotizMaterial>();
    this.initializeNotizen();
    viewSwitchService.formChanged.subscribe(this.onFormChanged);
  }

  public get activeNotiz(){
    return this._activeNotiz;
  }

  private onFormChanged= (abschnitt: Abschnitt) => {
    if (this.notizMap.get(abschnitt.id)) {
      this._activeNotiz = this.notizMap.get(abschnitt.id);
    }
  }
  private initializeNotizen() {
    this.notizMap.set('A', this.notiz.a);
    this.notizMap.set('B', this.notiz.b);
    this.notizMap.set('C', this.notiz.c)
    this.notizMap.set('D', this.notiz.d);
    this.notizMap.set('E', this.notiz.e);
    this.notizMap.set('F', this.notiz.f);
    this.notizMap.set('G', this.notiz.g);
    this.notizMap.set('H', this.notiz.h);
    this.notizMap.set('I', this.notiz.i);
    this.notizMap.set('J', this.notiz.j);
  }
}
