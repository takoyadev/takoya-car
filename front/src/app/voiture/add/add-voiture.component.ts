import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  voiture;
  id: number;
  addModeActivate: boolean;

  @ViewChild('f') form: NgForm;

  constructor(
    private proprietaireService: ProprietaireService,
    private voitureService: VoitureService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.proprietaireService.getList().subscribe(data => this.proprietaires = data);
    this.id = this.route.snapshot.params.id;
    this.addModeActivate = true;
    this.voitureService.getById(+this.id).subscribe(
      data => {
        this.voiture = data;
        if (data != null) {
          this.addModeActivate = false;
          this.form.setValue({
            proprietaire: this.voiture.owner.id,
            marque:       this.voiture.marque,
            modele:       this.voiture.modele
          });
        } else {
          this.addModeActivate = true;
        }
      },
        error => console.log(error)
    );
  }

  saveVoiture() {
    const proprietaire = new Proprietaire();
    proprietaire.id = this.form.value.proprietaire;
    this.voiture = new Voiture();
    this.voiture.id = this.id;
    this.voiture.owner = proprietaire;
    this.voiture.marque = this.form.value.marque;
    this.voiture.modele = this.form.value.modele;
    this.voitureService.save(this.voiture).subscribe(() => this.router.navigate(['/voitures']), error => {
      console.log(error);
      this.errorMsg = 'Remplis correctement ton formulaire, fumier !!!';
    });

  }

}
