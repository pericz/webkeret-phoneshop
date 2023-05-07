import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { PhoneService } from '../../shared/services/phone.service';
import { Phone } from 'src/app/shared/models/Phone';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addphone',
  templateUrl: './addphone.component.html',
  styleUrls: ['./addphone.component.scss']
})
export class AddPhoneComponent implements OnInit {

  addPhoneForm = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl('')
  });

  constructor(private location: Location, private authService: AuthService, private phoneService: PhoneService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addPhoneForm.value);
    const phone: Phone = {
        brand: this.addPhoneForm.get('brand')?.value,
        model: this.addPhoneForm.get('model')?.value,
        price: this.addPhoneForm.get('price')?.value,
        rating: this.addPhoneForm.get('rating')?.value,
      };
      this.phoneService.create(phone).then(_ => {
        console.log('Phone added!');
        this.snackBar.open('Phone added!', 'Close', { duration: 3000 });
      }).catch(error => {
        console.error(error);
      })
  }

  goBack() {
    this.location.back();
  }

}
