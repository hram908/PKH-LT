import {HttpClient, HttpHandler} from '@angular/common/http';
import {PkhFormMaterial} from '../formulardaten/pkh-form-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(httpClient: HttpClient, pkhForm: PkhFormMaterial) {
    const anfrage = httpClient.post('localhost:4242/formular', pkhForm, null);
    console.log(anfrage.subscribe());
  }
}
