import { Voiture } from '../voiture/voiture';
import { ProprietaireService } from './proprietaire.service';
import { Injectable } from '@angular/core';

@Injectable()
export class VoitureService {

  public list: Voiture[] = [
    {
        id: 1,
        marque: 'Seat',
        modele: 'Leon III',
        proprietaire: this.proprietaireService.getById(1),
        status: 'ko',
        detail: 'Plaquettes à changer au plus tôt'
    },
    {
        id: 2,
        marque: 'Citroen',
        modele: 'C4',
        proprietaire: this.proprietaireService.getById(2),
        status: 'ok',
        detail: 'RaS'
    }
  ];

  constructor(private proprietaireService: ProprietaireService) {}

  switchOnAll() {
    for (const item of this.list) {
      item.status = 'ok';
    }
  }

  switchOffAll() {
    for (const item of this.list) {
      item.status = 'ko';
    }
  }

  switchOnOne(i: number) {
    this.list[i].status = 'ok';
  }

  switchOffOne(i: number) {
    this.list[i].status = 'ko';
  }

  getById(id: number) {
    return this.list.find(
      (s) => {
        return s.id === id;
      }
    );
  }

  getList() {
      return this.list;
  }

}
