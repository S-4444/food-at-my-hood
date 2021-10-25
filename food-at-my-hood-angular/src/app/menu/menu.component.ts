import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../model/menu-item';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems : MenuItem[] = [];
  constructor(private menuService:MenuService) { }
  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(
      response => {
        this.menuItems = response;
      }
    )
  }
}
