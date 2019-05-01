import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  endpoint = 'http://localhost:8080/car-back/auth/';
  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  signIn(username: string, password: string) {
    return this.httpClient.post(this.endpoint + "signin", {"username": username, "password": password});
  }

  signOut() {
    this.isAuth = false;
  }

}
