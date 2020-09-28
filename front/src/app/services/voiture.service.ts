import { Voiture } from '../voiture/voiture';
import { ProprietaireService } from './proprietaire.service';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class VoitureService {

  endpoint = environment.apiUrl + 'cars/';

  // public list: Voiture[] = [
  //   {
  //       id: 1,
  //       marque: 'Seat',
  //       modele: 'Leon III',
  //       owner: this.proprietaireService.getById(1),
  //       status: 'ko',
  //       detail: 'Plaquettes à changer au plus tôt'
  //   },
  //   {
  //       id: 2,
  //       marque: 'Citroen',
  //       modele: 'C4',
  //       owner: this.proprietaireService.getById(2),
  //       status: 'ok',
  //       detail: 'RaS'
  //   }
  // ];

  constructor(private httpClient: HttpClient) {}

  switchOnAll() {
    // for (const item of this.list) {
    //   item.status = 'ok';
    // }
  }

  switchOffAll() {
    // for (const item of this.list) {
    //   item.status = 'ko';
    // }
  }

  switchOnOne(i: number) {
    //this.list[i].status = 'ok';
  }

  switchOffOne(i: number) {
    //this.list[i].status = 'ko';
  }

  getById(id: number) {
    return this.httpClient.get<Voiture>(this.endpoint + id);
  }

  getList() {
    return this.httpClient.get<Voiture[]>(this.endpoint);
  }

}
