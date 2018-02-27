import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {PkhFormMaterial} from '../formulardaten/pkh-form-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(httpClient: HttpClient, pkhForm: PkhFormMaterial) {
    const headers = new HttpHeaders();
    const anfrage = httpClient.post('localhost:4242/formular', pkhForm,  {headers: headers});
    console.log(anfrage.subscribe());
  }
}
