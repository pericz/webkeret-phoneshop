import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from 'src/app/shared/models/Phone';

@Pipe({
  name: 'phoneBrand'
})
export class PhoneBrandPipe implements PipeTransform {
  transform(phones: Phone[], selectedBrand: string): Phone[] {
    if (!selectedBrand) {
      return phones;
    }
    return phones.filter(phone => phone.brand === selectedBrand);
  }
}