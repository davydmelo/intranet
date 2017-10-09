import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Vendor } from './vendor';

@Injectable()
export class VendorService {

  constructor(private http: HttpClient) { }

  getVendors(): Observable<Vendor[]> {

    return this.http.get('https://ej5lipygf2.execute-api.us-east-1.amazonaws.com/dev/vendor')
      .catch((error: any) => {
        console.log(error);
        return Observable.throw('Server error');
      });
  }

  insertVendor(body: Object): Observable<Vendor[]> {
    let bodyString = JSON.stringify(body);
    let headers = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };

    return this.http.post('https://ej5lipygf2.execute-api.us-east-1.amazonaws.com/dev/vendor', body, headers)
      .catch((error: any) => {
        console.log(error);
        return Observable.throw('Server error');
      });
  }

}
