import {Entretien} from '../entretien/entretien';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class EntretienService {

  endpoint = environment.apiUrl + 'entretiens/';

  constructor(private httpClient: HttpClient) {}

  getById(id: number) {
    return this.httpClient.get<Entretien>(this.endpoint + id);
  }

  switchOnAll() { }

  switchOffAll() { }

  getList() {
      return this.httpClient.get<Entretien[]>(this.endpoint);
  }

  saveEntretien(entretien: Entretien) {
      return this.httpClient.post(this.endpoint + 'add', entretien);
  }

}
