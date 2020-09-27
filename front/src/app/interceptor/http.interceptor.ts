import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = req.clone();
    if (sessionStorage.getItem("token") != null) {
      newReq = req.clone({setHeaders: {'Authorization': 'Bearer ' + sessionStorage.getItem('token')}});
    }
    return next.handle(newReq);
  }
}
