import { Component, Input, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-item-voiture',
  templateUrl: './item-voiture.component.html',
  styleUrls: ['./item-voiture.component.scss']
})
export class ItemVoitureComponent implements OnInit {

  @Input() item: Voiture;

  constructor(private entretienService: EntretienService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.item.status;
  }

  onSwitch() {
    if (this.item.status === 'ok') {
      this.entretienService.switchOffOne(this.item.id);
    } else if (this.item.status === 'ko') {
      this.entretienService.switchOnOne(this.item.id);
    }
  }

}
