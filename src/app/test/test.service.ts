import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {RegistrationRequest, RegistrationResponse} from "./Registration";
import {Observable} from "rxjs/Rx";
/**
 * Created by tom on 16.05.16.
 */

@Injectable()
export class TestService {
  private init = '/api/init';

  constructor(private http:Http) {

  }

  requestRegistration(reqObject:RegistrationRequest, ip:String):Observable<RegistrationResponse> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(ip + this.init, JSON.stringify(reqObject), options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  private extractData(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

  private handleError(error:any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
