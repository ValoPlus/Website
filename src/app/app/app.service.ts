import {Injectable} from "@angular/core";
import {Observable}     from 'rxjs/Observable';
import {Response, RequestOptions, Headers, Http} from "@angular/http";
import {Change} from "./Change";

/**
 * Created by tom on 15.05.16.
 *
 * Service for access the build-information on Teamcity.
 */

@Injectable()
export class AppServcie {
  constructor(private jsonp:Http) {
  }

  private headers = new Headers({'Accept': 'application/json'});
  private buildsUrl = 'https://tc.valoplus.de/guestAuth/app/rest/builds?locator=buildType:Android_Build';
  private buildUrl = 'https://tc.valoplus.de/guestAuth/app/rest/changes?build=id:';
  private ChangeUrl = 'https://tc.valoplus.de/guestAuth/app/rest/changes/id:';

  public getBuildDescriptions(onfulfilled: (value: Change) => void) {
    this.jsonp.get(this.buildsUrl, new RequestOptions({headers: this.headers}))
      .toPromise().then(data => {
      return this.getChanges(this.extractData(data), onfulfilled)
    });
  }

  private getChanges(data:any, onfulfilled: (value: Change) => void) {
    var changeText = [];
    data.build.forEach(
      item => {
        this.jsonp.get(this.buildUrl + item.id, new RequestOptions({headers: this.headers})).toPromise().then(data => {
          const result = this.extractData(data);
          if(result.change != null) {
            result.change.forEach(change =>
              changeText.push(this.getChangeText(change.id, onfulfilled))
            )
          }
        });
      });
    return changeText;
  }

  private getChangeText(id:any, onfulfilled: (value: Change) => void) {
    this.jsonp.get(this.ChangeUrl + id, new RequestOptions({headers: this.headers})).toPromise().then(data => {
      const result = this.extractData(data);
      const sDate = result.date;
      var date = new Date(sDate.slice(0, 4), sDate.slice(4, 6) - 1, sDate.slice(6, 8),
        sDate.slice(9, 11), sDate.slice(11, 13), sDate.slice(13, 15));
      onfulfilled(new Change(parseInt(id), date, result.comment.trim().split('\n')))
    });
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
