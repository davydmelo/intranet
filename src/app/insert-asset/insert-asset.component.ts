import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Component({
  selector: 'app-insert-asset',
  templateUrl: './insert-asset.component.html',
  styleUrls: ['./insert-asset.component.css']
})
export class InsertAssetComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorService: VendorService) {

  }

  ngOnInit() {
    this.vendorService.getVendors().subscribe
    (
    vendors => {
      this.vendors = this.vendorService.orderVendorByName(vendors, false);
    },
    err => {
      console.log(err);
    }
    );
  }

}
