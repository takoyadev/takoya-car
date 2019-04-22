import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
  selector: 'app-detail-entretien',
  templateUrl: './detail-entretien.component.html',
  styleUrls: ['./detail-entretien.component.scss']
})
export class DetailEntretienComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(private entretienService: EntretienService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.entretienService.getAppareilById(+id).libelle;
    this.status = this.entretienService.getAppareilById(+id).status;
  }

}
