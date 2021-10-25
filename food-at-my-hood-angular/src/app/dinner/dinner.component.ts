import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dinneritems=[
    {'id':1,'itemname':'Kadai Paneer Gravy with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/kadaipaneer.jfif'},
    {'id':2,'itemname':'Mix Veg Recipe with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/mixveg.jpg'},
    {'id':3,'itemname':'Paneer Butter Masala with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/paneerbutter.jpg'},
    {'id':4,'itemname':'Palak Paneer with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/palakpaneer.jfif'},
    {'id':5,'itemname':'Punjabi Rajma with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/punjabirajma.jfif'},
    {'id':6,'itemname':'Chana Aloo Masal with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/chanamasala.jfif'}
  ]
   


}
