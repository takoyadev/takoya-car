import { Entretien } from '../entretien/entretien';
import { VoitureService } from './voiture.service';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class EntretienService {

  endpoint = 'http://localhost:8080/entretiens/';

  signIn(username: string, password: string) {
    return this.httpClient.post(this.endpoint + "signin", {username: username, password: password}, {responseType: "text"});
  }

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
