import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EntretienService } from 'src/app/services/entretien.service';

@Component({
  selector: 'app-add-entretien',
  templateUrl: './add-entretien.component.html',
  styleUrls: ['./add-entretien.component.scss']
})
export class AddEntretienComponent implements OnInit {

  name = 'Appareil';
  status = 'Statut';

  constructor(private entretienService: EntretienService, private route: ActivatedRoute) { }

  ngOnInit() {
      /* empty, for now */
  }

}
