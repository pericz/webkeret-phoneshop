import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPhoneRoutingModule } from './addphone-routing.module';
import { AddPhoneComponent } from './addphone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AddPhoneComponent
  ],
  imports: [
    CommonModule,
    AddPhoneRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class AddPhoneModule { }
