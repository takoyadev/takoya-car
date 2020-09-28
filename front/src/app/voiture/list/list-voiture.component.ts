import { Component, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-list-voiture',
  templateUrl: './list-voiture.component.html',
  styleUrls: ['./list-voiture.component.scss']
})
export class ListVoitureComponent implements OnInit {

  list: Voiture[];

  lastUpdate = new Promise((resolve) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1
    );
  });

  constructor(private service: VoitureService) { }

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
