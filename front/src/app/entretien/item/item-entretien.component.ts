import { Component, Input, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { Entretien } from '../entretien';

@Component({
  selector: 'app-item-entretien',
  templateUrl: './item-entretien.component.html',
  styleUrls: ['./item-entretien.component.scss']
})
export class ItemEntretienComponent implements OnInit {

  @Input() item: Entretien;

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
