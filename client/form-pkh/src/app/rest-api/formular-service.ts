import {HttpClient} from '@angular/common/http';
import {PkhMaterial} from '../formulardaten/pkh-material';
import {Injectable} from '@angular/core';
import {Notiz} from '../formulardaten/notiz';

@Injectable()
export class FormularService {
  constructor(private httpClient: HttpClient, private notiz: Notiz) {
  }

  async sendeFormularAnServer(pkhForm: PkhMaterial) {

    const anfrage = this.httpClient.post('http://127.0.0.1:4242/formular', pkhForm, {responseType: 'text'});
    await anfrage.subscribe(data => {
      this.notiz.downloadLink = data;
    });

  }
}
