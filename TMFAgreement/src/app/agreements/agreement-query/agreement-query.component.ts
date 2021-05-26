import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Agreement } from 'src/app/shared/agreement.model';
import { AgreementService } from 'src/app/shared/agreement.service';

@Component({
  selector: 'app-agreement-query',
  templateUrl: './agreement-query.component.html',
  styleUrls: ['./agreement-query.component.css']
})
export class AgreementQueryComponent implements OnInit {


  query1: Agreement[];
  query2: Agreement[];

  constructor(private service: AgreementService,
    private firestore: AngularFirestore,
    ) { }

  ngOnInit() {
    // query1 hez
    this.service.query1Agreements().subscribe(actionArray => {
      this.query1 = actionArray.map(item => {
       return {
        id: item.payload.doc.id, 
        ...item.payload.doc.data() as Object
        } as Agreement;
      })
    });

    //query2 höz
    this.service.query2Agreements().subscribe(actionArray => {
      this.query2 = actionArray.map(item => {
       return {
        id: item.payload.doc.id, 
        ...item.payload.doc.data() as Object
        } as Agreement;
      })
    });
    
  }

}
