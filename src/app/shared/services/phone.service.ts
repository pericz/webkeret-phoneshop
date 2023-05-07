import { Injectable } from '@angular/core';
import {  AngularFirestore  } from '@angular/fire/compat/firestore';
import { Phone } from '../models/Phone';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  collectionName = 'products';

  constructor(private afs: AngularFirestore) { }

  // CRUD

  delete(phone:Phone){
    return this.afs.collection<Phone>(this.collectionName).doc(phone.brand+phone.model).delete();
  }

  create(phone: Phone){
    return this.afs.collection<Phone>(this.collectionName).doc(phone.brand+phone.model).set(phone);
  }
  
  getAllPhone(): Observable<Phone[]> {
    return this.afs.collection<Phone>(this.collectionName).valueChanges();
  }
}
