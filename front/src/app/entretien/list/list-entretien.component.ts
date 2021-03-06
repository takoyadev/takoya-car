import { Component, OnInit } from '@angular/core';
import { EntretienService } from 'src/app/services/entretien.service';
import { Entretien } from '../entretien';

@Component({
  selector: 'app-list-entretien',
  templateUrl: './list-entretien.component.html',
  styleUrls: ['./list-entretien.component.scss']
})
export class ListEntretienComponent implements OnInit {

  list: Entretien[];

  lastUpdate = new Promise((resolve) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1
    );
  });

  constructor(private service: EntretienService) { }

  ngOnInit() {
    this.service.getList().subscribe(data => this.list = data, error => console.log(error));
  }

  onAllumer() {
    this.service.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.service.switchOffAll();
    } else {
      return null;
    }
  }

}
