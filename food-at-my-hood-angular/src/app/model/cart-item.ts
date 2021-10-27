import { Customer } from "./customer";
import { MenuItem } from "./menu-item";

export interface CartItem {
    id: number,
    menuItem: MenuItem,
    customer: Customer,
    quantity: number
  }
  