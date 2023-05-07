import { Injectable } from '@angular/core';
import { Phone } from '../models/Phone';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Phone[] = [];

  addToCart(phone: Phone) {
    this.items.push(phone);
  }

  removeFromCart(item: Phone): void {
    var index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
  }

  getLenght(){
    return this.items.length;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    var index = this.items.length
    for (let i = 0; i < index; i++) {
        this.items.pop();
      } 
  }
}
