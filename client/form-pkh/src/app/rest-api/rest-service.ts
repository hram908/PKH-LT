import {HttpClient} from '@angular/common/http';
import {PkhMaterial} from '../formulardaten/pkh-material';
import {Injectable} from '@angular/core';

@Injectable()
export class RestService {
  constructor(public httpClient: HttpClient) {
  }

  sendeFormularAnServer(pkhForm: PkhMaterial): String {
    const anfrage = this.httpClient.post<any>('http://127.0.0.1:4242/formular', pkhForm);

    // TODO: extrahiere den Downloadlink aus dem Rückgabevalue (Isi fragen)
    const returnContent: string[] = [];
    console.log(anfrage.subscribe(responses => responses.forEach(response => returnContent.push(response))));
    // console.log(returnContent);
    return 'Hier kommt noch der Link';
  }
}
