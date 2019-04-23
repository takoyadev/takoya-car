import { Component, OnInit } from '@angular/core';
import { Proprietaire } from '../proprietaire';
import { ProprietaireService } from 'src/app/services/proprietaire.service';

@Component({
  selector: 'app-list-proprietaire',
  templateUrl: './list-proprietaire.component.html',
  styleUrls: ['./list-proprietaire.component.scss']
})
export class ListProprietaireComponent implements OnInit {

  list: Proprietaire[];

  lastUpdate = new Promise((resolve) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1
    );
  });

  constructor(private service: ProprietaireService) { }

  ngOnInit() {
    this.list = this.service.getList();
  }

}
