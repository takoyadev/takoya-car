import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EntretienService } from 'src/app/services/entretien.service';
import {NgForm} from "@angular/forms";
import {Entretien} from "../entretien";

@Component({
  selector: 'app-add-entretien',
  templateUrl: './add-entretien.component.html',
  styleUrls: ['./add-entretien.component.scss']
})
export class AddEntretienComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  @ViewChild('f') form: NgForm;

  constructor(private entretienService: EntretienService, private route: ActivatedRoute) { }

  ngOnInit() {
      /* empty, for now */
  }

  saveEntretien() {
    let entretien = new Entretien();
    entretien.libelle = this.form.value.libelle;
    entretien.car_id = this.form.value.car;

    let dateStr = this.form.value.date.split("/");

    entretien.date = dateStr[2] + "-" + dateStr[1] + "-" + dateStr[0];
    entretien.description = this.form.value.description;
    entretien.status = this.form.value.status;

    this.entretienService.saveEntretien(entretien).subscribe(() => console.log("success"), error => console.log(error));
  }

}
