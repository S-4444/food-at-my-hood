import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  customer! : Customer;
  constructor() { }
  setCustomer(customer : Customer):void{
    this.customer = customer;
  }

  get loggedInCustomer():Customer{
    return this.customer;
  }
}
