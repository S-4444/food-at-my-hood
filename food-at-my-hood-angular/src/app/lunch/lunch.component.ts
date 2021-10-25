import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  veglunchitems=[
    {'id':1,'itemname':'Kadai Paneer Gravy with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/kadaipaneer.jfif'},
    {'id':2,'itemname':'Mix Veg Recipe with Chapathi','aboutitem':'Curry with for and chapathi','price':200,'img':'../../assets/mixveg.jpg'},
    {'id':3,'itemname':'Paneer Butter Masala with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/paneerbutter.jpg'},
    {'id':4,'itemname':'Palak Paneer with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/palakpaneer.jfif'},
    {'id':5,'itemname':'Punjabi Rajma with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/punjabirajma.jfif'},
    {'id':6,'itemname':'Chana Aloo Masal with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/chanamasala.jfif'}
  ]
  nonveglunchitems=[
    {'id':1,'itemname':'Mutton Masala with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/muttonmasala.jpg'},
    {'id':2,'itemname':'Prawn Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/prawncurry.jpg'},
    {'id':3,'itemname':'Butter Chicken with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/butterchicken.jpg'},
    {'id':4,'itemname':'Chiken Chettinad gravy with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/chickenchettinad.jpg'},
    {'id':5,'itemname':'Andhra Green Chilli Chicken Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/andhra.jpg'},
    {'id':6,'itemname':'Mutton Keema Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/muttonkeema.jpg'}

  ]

}
