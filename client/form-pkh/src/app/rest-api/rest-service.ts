import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {PkhFormMaterial} from '../formulardaten/pkh-form-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(httpClient: HttpClient, pkhForm: PkhFormMaterial) {
    const headers = new HttpHeaders();

    const anfrage = httpClient.post('http://127.0.0.1:4242/formular', pkhForm);

    console.log(anfrage.subscribe());
  }
}
