import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EntretienService } from 'src/app/services/entretien.service';
import {NgForm} from "@angular/forms";
import {Entretien} from "../entretien";
import {Voiture} from "../../voiture/voiture";

@Component({
  selector: 'app-add-entretien',
  templateUrl: './add-entretien.component.html',
  styleUrls: ['./add-entretien.component.scss']
})
export class AddEntretienComponent implements OnInit {

  errorMsg = '';

  @ViewChild('f') form: NgForm;

  constructor(private entretienService: EntretienService, private router: Router) { }

  ngOnInit() {
      /* empty, for now */
  }

  saveEntretien() {
    let entretien = new Entretien();
    entretien.libelle = this.form.value.libelle;

    let voiture = new Voiture();
    voiture.id = this.form.value.car;

    entretien.car = voiture;

    let dateStr = this.form.value.date.split("/");

    entretien.date = new Date(dateStr[2], dateStr[1] - 1, dateStr[0]);
    entretien.description = this.form.value.description;
    entretien.status = this.form.value.status;

    this.entretienService.saveEntretien(entretien).subscribe(() => this.router.navigate(['/..']), error => {
      console.log(error);
      this.errorMsg = 'Remplis correctement ton formulaire, fumier !!!';
    });
  }

}
