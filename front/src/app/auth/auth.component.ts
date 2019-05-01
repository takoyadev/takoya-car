import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = false;
  }

  onSignIn() {
    this.authService.signIn(this.form.value.username, this.form.value.password).subscribe(
      token => {
        console.log("Auth reussie - TOKEN : " + token);
        sessionStorage.setItem("token", token);
        this.authStatus = true;
        this.router.navigate(['entretiens']);
      },
      error => {
        console.log(error);
        alert("Erreur lors de la connexion")
      });
  }

}
