import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  login(email:string,password:string) :Observable<Customer>{
    const headers = { 'content-type': 'application/json'};
    let credentials = { email: email , password : password};
    return this.httpClient.post<any>("http://localhost:8080/authenticate", JSON.stringify(credentials), {'headers': headers});
  
  }
  
  signup(customer: Customer) : Observable<any>  {
    console.log("signup called");
    const headers = { 'content-type': 'application/json'};
    // let header : HttpHeaders = new HttpHeaders();
    // header.set('Content-Type', 'application/json');
    return this.httpClient.post<any>("http://localhost:8080/customers", JSON.stringify(customer), {'headers': headers});
  }
}
