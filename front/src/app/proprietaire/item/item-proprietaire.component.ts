import { Component, Input, OnInit } from '@angular/core';
import { Proprietaire } from '../proprietaire';

@Component({
  selector: 'app-item-proprietaire',
  templateUrl: './item-proprietaire.component.html',
  styleUrls: ['./item-proprietaire.component.scss']
})
export class ItemProprietaireComponent implements OnInit {

  @Input() item: Proprietaire;

  constructor() { }

  ngOnInit() {
  }

}
