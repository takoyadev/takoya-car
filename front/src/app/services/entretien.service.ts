import { Entretien } from '../entretien/entretien';
import { VoitureService } from './voiture.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class EntretienService {

  endpoint = environment.apiUrl + 'entretiens/';

  constructor(private httpClient: HttpClient, private voitureService: VoitureService) {}

  switchOnAll() {
    // for (const entretien of this.list) {
    //   entretien.status = 'ok';
    // }
  }

  switchOffAll() {
    // for (const entretien of this.list) {
    //   entretien.status = 'ko';
    // }
  }

  switchOnOne(i: number) {
    // this.list[i].status = 'ok';
  }

  switchOffOne(i: number) {
    // this.list[i].status = 'ko';
  }

  getEntretienById(id: number) {
      return this.httpClient.get<Entretien>(this.endpoint + id);
  }

  getList() {
      return this.httpClient.get<Entretien[]>(this.endpoint);
  }

  saveEntretien(entretien: Entretien) {
      return this.httpClient.post(this.endpoint + "add", entretien);
  }

}
