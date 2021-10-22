import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  cartItem : CartItem = {
    id : 1,
    menuName : "Mutton Korma",
    quantity  : 1 ,
   lineTotal  : 550
  };

  constructor() { }

  ngOnInit(): void {
  }

}
