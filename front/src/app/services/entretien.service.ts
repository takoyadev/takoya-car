import { Entretien } from '../entretien/entretien';
import { VoitureService } from './voiture.service';
import { Injectable } from '@angular/core';

@Injectable()
export class EntretienService {

  public list: Entretien[] = [
    {
      id: 1,
      libelle: 'Plaquettes Cyril',
      date: new Date(),
      voiture: this.voitureService.getById(1),
      status: 'ko',
      detail: 'Commande des mauvaises plaquettes'
    },
    {
      id: 2,
      libelle: 'Session globale',
      date: new Date(),
      voiture: this.voitureService.getById(2),
      status: 'ok',
      detail: 'RaS'
    },
    {
      id: 3,
      libelle: 'Bougies Cyril',
      date: new Date(),
      voiture: this.voitureService.getById(1),
      status: 'ok',
      detail: 'RaS'
    }
  ];

  constructor(private voitureService: VoitureService) {}

  switchOnAll() {
    for (const entretien of this.list) {
      entretien.status = 'ok';
    }
  }

  switchOffAll() {
    for (const entretien of this.list) {
      entretien.status = 'ko';
    }
  }

  switchOnOne(i: number) {
    this.list[i].status = 'ok';
  }

  switchOffOne(i: number) {
    this.list[i].status = 'ko';
  }

  getAppareilById(id: number) {
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
