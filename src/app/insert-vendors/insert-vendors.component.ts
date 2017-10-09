import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';


@Component({
  selector: 'app-insert-vendors',
  templateUrl: './insert-vendors.component.html',
  styleUrls: ['./insert-vendors.component.css']
})
export class InsertVendorsComponent implements OnInit {

  vendor: Vendor = new Vendor(0, "");


  constructor(private vendorService: VendorService) { }

  ngOnInit() {
  }

  insertVendor() {

    this.vendorService.insertVendor(this.vendor).subscribe
      (
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
      );
  }

}
