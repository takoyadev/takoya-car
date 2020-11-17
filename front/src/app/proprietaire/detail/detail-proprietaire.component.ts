import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProprietaireService} from 'src/app/services/proprietaire.service';
import {Proprietaire} from '../proprietaire';

@Component({
  selector: 'app-detail-proprietaire',
  templateUrl: './detail-proprietaire.component.html',
  styleUrls: ['./detail-proprietaire.component.scss']
})
export class DetailProprietaireComponent implements OnInit {

  item: Proprietaire;

  constructor(private service: ProprietaireService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.service.getById(+id).subscribe(data => this.item = data, error => console.log(error));
  }

}
