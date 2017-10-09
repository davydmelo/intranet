import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-list-vendors',
  templateUrl: './list-vendors.component.html',
  styleUrls: ['./list-vendors.component.css']
})
export class ListVendorsComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.loadVendors();
  }

  loadVendors() {
    // Get all vendors
    this.vendorService.getVendors().subscribe
      (
      vendors => {
        this.vendors = vendors;
      },
      err => {
        console.log(err);
      }
      );
  }

}
