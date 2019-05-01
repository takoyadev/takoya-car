import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  endpoint = 'http://localhost:8080/user/';
  isAuth = false;

  constructor(private httpClient: HttpClient) {}

  signIn(username: string, password: string) {
    let observable = this.httpClient.post(this.endpoint + "signin", {username: username, password: password}, {responseType: "text"});
    observable.subscribe(_ => this.isAuth = true);
    return observable;
  }

  signOut() {
    this.isAuth = false;
  }

}
