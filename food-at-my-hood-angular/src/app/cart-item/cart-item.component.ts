import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/cart-item';
import { Customer } from '../model/customer';
import { MenuItem } from '../model/menu-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  menuItems : MenuItem[] = 
  [
    {id : 1, name : "Dosa", price : 200},
    {id : 2, name : "Biryani", price : 300},
    {id : 3, name : "Lassi", price : 150}
  ];

  customer : Customer = {
    id : 1, name: "supriya", mobileNumber : 123456789, email : "supriya@gmail.com", password : '111'
  };
  cartItems : CartItem[] = [
    {id : 1, customer : this.customer, menuItem : this.menuItems[0] , quantity : 1},
    {id : 2, customer : this.customer, menuItem : this.menuItems[1] , quantity : 1},
    {id : 3, customer : this.customer, menuItem : this.menuItems[2] , quantity : 3},


  ]; 
  total : number = 0;

  constructor() { }

  ngOnInit(): void {
    for(let cartItem of this.cartItems){
      let lineTotal = cartItem.quantity * cartItem.menuItem.price;
      console.log(lineTotal);
      this.total += lineTotal;
    }
  }

}
