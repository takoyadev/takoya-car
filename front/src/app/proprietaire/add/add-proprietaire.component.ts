import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Proprietaire} from '../proprietaire';
import {ProprietaireService} from '../../services/proprietaire.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-proprietaire.component.html',
  styleUrls: ['./add-proprietaire.component.scss']
})
export class AddProprietaireComponent implements OnInit {

  errorMsg = '';
  proprietaires: Proprietaire[];

  @ViewChild('f') form: NgForm;

  constructor(private proprietaireService: ProprietaireService, private router: Router) { }

  ngOnInit() {
    this.proprietaireService.getList().subscribe(data => this.proprietaires = data);
  }

  saveProprietaire() {
    const proprietaire = new Proprietaire();
    proprietaire.nom = this.form.value.nom;
    proprietaire.prenom = this.form.value.prenom;
    this.proprietaireService.save(proprietaire).subscribe(() => this.router.navigate(['/..']), error => {
      console.log(error);
      this.errorMsg = 'Remplis correctement ton formulaire, fumier !!!';
    });

  }

}
