import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-menu-items',
  templateUrl: './list-of-menu-items.component.html',
  styleUrls: ['./list-of-menu-items.component.css']
})
export class ListOfMenuItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breakfastitems=[
    {'id':1,'itemname':'Idly','aboutitem':'Idly is Soft and Digestive.It is be eaten with chutney and Sambar','price':50,'img':'../../assets/idli.jpg'},
    {'id':2,'itemname':'Dosa','aboutitem':'Dosa is crispy to Eat.It is be eaten with chutney and Sambar','price':50,'img':'../../assets/dosa.jpg'},
    {'id':3,'itemname':'Upma','aboutitem':'Upma is Good and Digestive.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/upma.jpg'},
    {'id':4,'itemname':'Vada','aboutitem':'Vada is Soft inside and Crispy Outside.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/vada.jpg'},
    {'id':5,'itemname':'Pongal','aboutitem':'Pongal is delicious and Digestive.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/pongal.jpg'},
    {'id':6,'itemname':'Tomato Bath','aboutitem':'Prepared with different ingredients. Delicious to eat','price':50,'img':'../../assets/tomatobath.jpg'},
    {'id':7,'itemname':'Kadai Paneer Gravy with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/kadaipaneer.jfif'},
    {'id':8,'itemname':'Mix Veg Recipe with Chapathi','aboutitem':'Curry with for and chapathi','price':200,'img':'../../assets/mixveg.jpg'},
    {'id':9,'itemname':'Paneer Butter Masala with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/paneerbutter.jpg'},
    {'id':10,'itemname':'Palak Paneer with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/palakpaneer.jfif'},
    {'id':11,'itemname':'Punjabi Rajma with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/punjabirajma.jfif'},
    {'id':12,'itemname':'Chana Aloo Masal with Chapathi','aboutitem':'Curry for rice and chapathi','price':200,'img':'../../assets/chanamasala.jfif'},
    {'id':13,'itemname':'Mutton Masala with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/muttonmasala.jpg'},
    {'id':14,'itemname':'Prawn Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/prawncurry.jpg'},
    {'id':15,'itemname':'Butter Chicken with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/butterchicken.jpg'},
    {'id':16,'itemname':'Chiken Chettinad gravy with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/chickenchettinad.jpg'},
    {'id':17,'itemname':'Andhra Green Chilli Chicken Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/andhra.jpg'},
    {'id':18,'itemname':'Mutton Keema Curry with Rice','aboutitem':'Curry for rice and chapathi','price':250,'img':'../../assets/muttonkeema.jpg'},
    {'id':19,'itemname':'Kadai Paneer Gravy with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/kadaipaneer.jfif'},
    {'id':20,'itemname':'Mix Veg Recipe with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/mixveg.jpg'},
    {'id':21,'itemname':'Paneer Butter Masala with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/paneerbutter.jpg'},
    {'id':22,'itemname':'Palak Paneer with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/palakpaneer.jfif'},
    {'id':23,'itemname':'Punjabi Rajma with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/punjabirajma.jfif'},
    {'id':24,'itemname':'Chana Aloo Masal with Chapathi','aboutitem':'Curry for rice and chapathi','price':150,'img':'../../assets/chanamasala.jfif'}
  ]

}
