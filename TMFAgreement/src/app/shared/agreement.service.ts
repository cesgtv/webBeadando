import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agreement } from './agreement.model';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {

  formData: Agreement;

  constructor(private firestore: AngularFirestore) { }

  // get rekords
  listAgreements(){
    return this.firestore.collection('agreements', ref => ref.orderBy('name','asc')).snapshotChanges();
  }

  query1Agreements(){
    return this.firestore.collection('agreements', ref => ref.where('status', '==' , 'ok').where('version', '>', '2.0.0').orderBy('version').orderBy('name')).snapshotChanges();
  }

  query2Agreements(){
    return this.firestore.collection('agreements', ref => ref.where('agreementType', '==', 'agreement').where('status', '==', 'pending').where('agreementPeriod', '<=', 7).orderBy('agreementPeriod').limit(3)).snapshotChanges();
  }
}
