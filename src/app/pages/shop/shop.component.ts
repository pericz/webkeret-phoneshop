import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/Image';
import { PhoneService } from '../../shared/services/phone.service';
import { CartService } from '../../shared/services/cart.service';
import { Phone } from 'src/app/shared/models/Phone';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {

  galleryObject?: Array<Image>;
  chosenImage?: Image;
  items: Observable<Phone[]>;
  selectedBrand: string;

  constructor(private phoneService: PhoneService, private cartService: CartService) {
    this.items = phoneService.getAllPhone();
    this.selectedBrand = "";
  }

  ngOnInit(): void {

  }
  onBrandSelect(brand: string): void {
    if (brand === 'All'){
      this.selectedBrand = "";
    } else {
      this.selectedBrand = brand;
    }
  }

  addtoCart(phone: Phone){
    this.cartService.addToCart(phone);
  }
  
  removePhone(phone: Phone){
    this.phoneService.delete(phone);
  }
 

}
