import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer : Customer = {
    id: 0,
    name: "",
    mobileNumber: 0,
    email: "",
    password: ""

  }
  success : boolean = false;

  constructor(private customerService:CustomerService , private router : Router) { }

  ngOnInit(): void {
  }

  signup():void {
   
    let observable : Observable<any> = this.customerService.signup(this.customer);
    observable.subscribe(
      response => {
         this.success = true;
         this.customer.name="";
         this.customer.mobileNumber=0;
         this.customer.email="";
         this.customer.password="";
         this.router.navigateByUrl('login');
      },
      error => {
        // this.error = error;
      }
    );
  }

}
