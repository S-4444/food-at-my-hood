import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  breakfastitems=[
    {'id':1,'itemname':'Idly','aboutitem':'Idly is Soft and Digestive.It is be eaten with chutney and Sambar','price':50,'img':'../../assets/idli.jpg'},
    {'id':2,'itemname':'Dosa','aboutitem':'Dosa is crispy to Eat.It is be eaten with chutney and Sambar','price':50,'img':'../../assets/dosa.jpg'},
    {'id':3,'itemname':'Upma','aboutitem':'Upma is Good and Digestive.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/upma.jpg'},
    {'id':4,'itemname':'Vada','aboutitem':'Vada is Soft inside and Crispy Outside.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/vada.jpg'},
    {'id':5,'itemname':'Pongal','aboutitem':'Pongal is delicious and Digestive.It can be eaten with chutney and Sambar','price':50,'img':'../../assets/pongal.jpg'},
    {'id':6,'itemname':'Tomato Bath','aboutitem':'Prepared with different ingredients. Delicious to eat','price':50,'img':'../../assets/tomatobath.jpg'}
  ]
  
}
