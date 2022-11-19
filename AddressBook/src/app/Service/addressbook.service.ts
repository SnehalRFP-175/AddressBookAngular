import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  getAddressBookData: any;
  deleteAddressBookdata: any;
  addAddressBookData: any;
  updateAddressData: any;
  getAddressById: any;

  constructor() { }
}
