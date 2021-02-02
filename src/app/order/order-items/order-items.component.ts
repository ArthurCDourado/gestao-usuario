import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from '../../restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItemModel[];

  @Output() increaseQty = new EventEmitter<CartItemModel>();
  @Output() decreaseQty = new EventEmitter<CartItemModel>();
  @Output() remove = new EventEmitter<CartItemModel>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItemModel) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItemModel) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItemModel) {
    this.remove.emit(item);
  }

}
