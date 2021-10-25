import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { 
  }

  getMenuItems() : Observable<MenuItem[]>
  {
    return this.httpClient.get<MenuItem[]>("http://localhost:8080/menu-items");
  }

}
