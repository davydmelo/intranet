import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  allVendors: Vendor[];

  sortedById: boolean = false;
  crescById: boolean = false;
  sortedByName: boolean = false;
  crescByName: boolean = false;

  @ViewChild('idFilter') idFilter: ElementRef;
  @ViewChild('nameFilter') nameFilter: ElementRef;


  constructor(private vendorService: VendorService) { }

  ngOnInit() {
    this.loadVendors();
    
  }

  loadVendors() {
    this.vendorService.getVendors().subscribe
      (
      vendors => {
        this.allVendors = vendors
        this.vendors = vendors;

        this.vendors = this.vendorService.orderVendorById(this.vendors);
      },
      err => {
        console.log(err);
      }
      );
  }

  onFilterChange(event: any) {
    this.vendors = this.allVendors.filter((vendor) => {
      return String(vendor.id).includes(this.idFilter.nativeElement.value);
    }).filter((vendor) => {
      return vendor.name.includes(this.nameFilter.nativeElement.value);
    });
  }

  cleanSearchCriteria() {
    this.vendors = this.allVendors;
    this.idFilter.nativeElement.value = '';
    this.nameFilter.nativeElement.value = '';
  }

  orderIdDesc() {
    this.sortedByName = false;

    this.crescById = false;
    this.sortedById = true;
    this.vendors = this.vendorService.orderVendorById(this.vendors);
  }

  orderIdCres() {
    this.sortedByName = false;

    this.crescById = true;
    this.sortedById = true;
    this.vendors = this.vendorService.orderVendorById(this.vendors, false);
  }

  orderNameDesc() {
    this.sortedById = false;

    this.crescByName = false;
    this.sortedByName = true;
    this.vendors = this.vendorService.orderVendorByName(this.vendors);
  }

  orderNameCres() {
    this.sortedById = false;

    this.crescByName = true;
    this.sortedByName = true;
    this.vendors = this.vendorService.orderVendorByName(this.vendors, false);
  }


}
