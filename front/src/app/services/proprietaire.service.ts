import {Proprietaire} from '../proprietaire/proprietaire';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ProprietaireService {

  endpoint = environment.apiUrl + 'owner/';

  constructor(private httpClient: HttpClient) {}

  getById(id: number) {
    return this.httpClient.get<Proprietaire>(this.endpoint + id);
  }

  getList() {
    return this.httpClient.get<Proprietaire[]>(this.endpoint);
  }

  save(proprietaire: Proprietaire) {
    return this.httpClient.post(this.endpoint, proprietaire);
  }

}
