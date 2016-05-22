import {Injectable} from "@angular/core";
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {RegistrationRequest, RegistrationResponse} from "./Registration";
import {Observable} from "rxjs/Rx";
import {Wlan} from "./Wlan";
/**
 * Created by tom on 16.05.16.
 */

@Injectable()
export class TestService {
  private init = '/api/init';

  private wlan = '/api/settings/wlan';

  private options:RequestOptions;

  constructor(private http:Http) {
    let headers = new Headers({
      'Authorization': '7882ABD9-B905-4ABB-BC90-4E71DE8CC9E4',
      'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });
  }

  requestRegistration(reqObject:RegistrationRequest, ip:String):Observable<RegistrationResponse> {
    return this.http.post(ip + this.init, JSON.stringify(reqObject), this.options)
      .map(this.extractData)
      .catch(this.handleError)
  }

  requestWlan(reqObject:Wlan, ip:String):Observable<String> {
    return this.http.post(ip + this.wlan, JSON.stringify(reqObject), this.options)
      .map(this.extractDataString)
      .catch(this.handleError)
  }

  private extractDataString(res:Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let body = res.text();
    return body || '';
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
