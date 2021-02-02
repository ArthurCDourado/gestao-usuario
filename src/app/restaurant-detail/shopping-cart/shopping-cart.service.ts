import { Injectable } from '@angular/core';
import {CartItemModel} from './cart-item.model';
import {MenuItemModel} from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

  items: CartItemModel[] = [];

  constructor() { }

  clear() {
    this.items = [];
  }

  addItem(item: MenuItemModel) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQty(foundItem);
    } else {
      this.items.push(new CartItemModel(item));
    }
  }

  increaseQty(item: CartItemModel) {
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItemModel) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }

}
