import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { VoitureService } from 'src/app/services/voiture.service';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss']
})
export class DetailVoitureComponent implements OnInit {

  item: Voiture;

  constructor(private service: VoitureService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.item = this.service.getById(+id);
  }

}
