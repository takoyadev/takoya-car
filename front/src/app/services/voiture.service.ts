import {Voiture} from '../voiture/voiture';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class VoitureService {

  endpoint = environment.apiUrl + 'cars/';

  constructor(private httpClient: HttpClient) {}

  getById(id: number) {
    return this.httpClient.get<Voiture>(this.endpoint + id);
  }

  getList() {
    return this.httpClient.get<Voiture[]>(this.endpoint);
  }

  saveVoiture(voiture: Voiture) {
    return this.httpClient.post(this.endpoint, voiture);
  }

}
