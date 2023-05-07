import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPhoneComponent } from './addphone.component';

const routes: Routes = [{ path: '', component: AddPhoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPhoneRoutingModule { }
