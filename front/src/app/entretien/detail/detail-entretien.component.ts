import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EntretienService } from 'src/app/services/entretien.service';
import {Entretien} from "../entretien";

@Component({
  selector: 'app-detail-entretien',
  templateUrl: './detail-entretien.component.html',
  styleUrls: ['./detail-entretien.component.scss']
})
export class DetailEntretienComponent implements OnInit {

  name;
  status;

  constructor(private entretienService: EntretienService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.entretienService.getEntretienById(id).subscribe(data => {
      this.name = data.libelle;
      this.status = data.status;
    }, error => console.log(error));
  }

}
