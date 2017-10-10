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

  orderVendorById(vendors: Vendor[], desc: boolean = true) : Vendor[]
  {
    if (desc)
      return vendors.sort((a, b) => { return (a.id < b.id) ? 1 : 0 });
    else
      return vendors.sort((a, b) => { return (a.id > b.id) ? 1 : 0 });
  }

  orderVendorByName(vendors: Vendor[], desc: boolean = true) : Vendor[]
  {
    if (desc)
      return vendors.sort((a, b) => { return (a.name < b.name) ? 1 : 0 });
    else
      return vendors.sort((a, b) => { return (a.name > b.name) ? 1 : 0 });
  }

}
