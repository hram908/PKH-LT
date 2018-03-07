import {HttpClient} from '@angular/common/http';
import {PkhMaterial} from '../formulardaten/pkh-material';
import {Injectable} from '@angular/core';
import {Notiz} from '../formulardaten/notiz';
import {Urls} from '../common/urls';

@Injectable()
export class FormularService {
  constructor(private httpClient: HttpClient, private notiz: Notiz) {
  }

  async sendeFormularAnServer(pkhForm: PkhMaterial) {

    const anfrage = this.httpClient.post(Urls.Formular, pkhForm, {responseType: 'text'});
    await anfrage.subscribe(data => {
      this.notiz.downloadLink = data;
    });

  }
}
