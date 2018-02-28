import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PkhMaterial} from '../formulardaten/pkh-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(httpClient: HttpClient, pkhForm: PkhMaterial) {
    const headers = new HttpHeaders();

    const anfrage = httpClient.post('http://127.0.0.1:4242/formular', pkhForm);

    console.log(anfrage.subscribe());
  }
}
