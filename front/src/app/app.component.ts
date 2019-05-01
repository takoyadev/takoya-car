import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  userLoggedIn() {
    return sessionStorage.getItem("token") != null ? true : false;
  }

  onSignOut() {
    sessionStorage.clear();
    this.router.navigate(["/auth"]);
  }

}
