import {HttpClient} from '@angular/common/http';
import {PkhMaterial} from '../formulardaten/pkh-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(httpClient: HttpClient, pkhForm: PkhMaterial) {
    const content: PkhMaterial = pkhForm;
    const returnContent: string[] = [];

    const anfrage = httpClient.post<any>('http://127.0.0.1:4242/formular', content);

    // TODO: extrahiere den Downloadlink aus dem Rückgabevalue (Isi fragen)
    console.log(anfrage.subscribe(responses => responses.forEach(response => returnContent.push(response))));
    // console.log(returnContent);
  }
}
