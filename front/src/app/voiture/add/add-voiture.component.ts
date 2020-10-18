import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {VoitureService} from '../../services/voiture.service';
import {Proprietaire} from '../../proprietaire/proprietaire';
import {ProprietaireService} from '../../services/proprietaire.service';
import {Voiture} from '../voiture';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.scss']
})
export class AddVoitureComponent implements OnInit {

  errorMsg = '';
  proprietaires: Proprietaire[];

  @ViewChild('f') form: NgForm;

  constructor(private proprietaireService: ProprietaireService, private voitureService: VoitureService, private router: Router) { }

  ngOnInit() {
    this.proprietaireService.getList().subscribe(data => this.proprietaires = data);
  }

  saveVoiture() {
    const proprietaire = new Proprietaire();
    proprietaire.id = this.form.value.proprietaire;
    const voiture = new Voiture();
    voiture.owner = proprietaire;
    voiture.marque = this.form.value.marque;
    voiture.modele = this.form.value.modele;
    this.voitureService.save(voiture);

    this.voitureService.save(voiture).subscribe(() => this.router.navigate(['/..']), error => {
      console.log(error);
      this.errorMsg = 'Remplis correctement ton formulaire, fumier !!!';
    });

  }

}
