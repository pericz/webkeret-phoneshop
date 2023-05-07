import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart.service';
import { PhoneService } from 'src/app/shared/services/phone.service';
import { Phone } from 'src/app/shared/models/Phone';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService, private phoneService: PhoneService) {}

  removeFromCart(phone: Phone){
    this.cartService.removeFromCart(phone);
  }

  getTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
  clearCart() {
    this.cartService.clearCart();
  }
  
}
