import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConfigService {
  public login: string = 'https://172.20.3.66/ample/rest/usermanagement/user/ip';
  public table : string = 'https://jsonplaceholder.typicode.com/posts';
  private options;
    
  constructor(private _http: Http) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: headers });
  }

  public GetAll = (type) => {
   return this._http.get(this[type])
    .map((res:Response) => res.json());
  }
  public getAPI = (type) : Observable<any> => {
    return this._http.get(this[type], this.options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}