import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  success : boolean = false;
  error : boolean = false;
  constructor(private customerService:CustomerService,private authService:AuthService,private router:Router) { }

  login(){
    
    this.customerService.login(this.email,this.password).subscribe(
      customer =>{
        this.error = false;
        this.success = true;
        this.authService.setCustomer(customer);
        this.router.navigateByUrl("/menu");
      },
      error => {
        if(error.status == 401){
          this.error = true;
          this.success = false;
          console.log("UnAuthorize");
        }
      }
      
    )

  }

  ngOnInit(): void {

  }

}
