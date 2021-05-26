import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agreement } from './shared/agreement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMFAgreement';

  /* TESZTHEZ
  saveData() {
    this.afs.collection('AgreementsTest').add(this.agreementTest).then(res => {
      console.log('Sikeres mentes.', res);
    }).catch(error => {
      console.log('Hiba lepett fel mentes kozben', error);
    })
  }

  readData(){
    this.afs.collection('AgreementsTest', ref => ref.where('completionDate', '>', '2014').orderBy('completionDate', 'asc').orderBy('id', 'desc'))
    .get().subscribe(res => {
      res.docs.forEach(el => {
        console.log(el.data());
      })
    }, error => {
      console.log('Hiba lepett fel kiolvasas kozben.', error);
    })
  }
  */

  agreementTest: Agreement;
  
  constructor(private afs: AngularFirestore) {
    /* TESZTHEZ
    this.agreementTest = {
     "type": "Agreement", 
     "href": "https://host:port/tmf-api/agreementManagement/v4/agreement/40", 
     "id": "40", 
     "name": "Moon", 
     "status": "Pending", 
     "documentNumber": 97867, 
     "version": "1.0", 
      
    "validFor": { 
      "startDateTime": "2018-06-12T00:00Z", 
      "endDateTime": "2019-01-11T00:00Z" 
    }, "engagedParty": [ 
      { "@type": "Organization", 
      "href": "https://host:port/tmf-api/partyManagement/v4/organization/500", 
      "id": "500", 
      "name": "Happy Travellers" 
      } 
    ], 
    "characteristic": [ 
      { 
        "name": "fidelityProgram", 
        "value": "premium", 
        "valueType": "string" 
      } 
    ], 
    "relatedParty": [ 
      { 
        "href": "https://host:port/tmf-api/partyManagement/v4/organization/2777", 
        "id": "2777",
        "name": "John Doe", 
        "role": "bill receiver" 
      } 
    ], 
    "agreementItem": [ 
      { 
        "productOffering": { 
        "href": "https://host:port/tmf-api/productCatalogManagement/v4/productOffering/61", 
        "name": "ChristmasToy" 
      }, 
      "termOrCondition": { 
        "id": "1", 
        "description": "delivery should be done in France" 
      } 
    } 
    ] 
    }
    */
 } 
}
