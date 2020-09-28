import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  endpoint = environment.apiUrl + 'users/';

  constructor(private httpClient: HttpClient) {}

  signIn(username: string, password: string) {
    return this.httpClient.post(this.endpoint + "signin", {username: username, password: password}, {responseType: "text"});
  }

}
