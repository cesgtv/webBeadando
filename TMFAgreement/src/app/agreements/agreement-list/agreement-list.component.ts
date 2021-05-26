import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Agreement } from 'src/app/shared/agreement.model';
import { AgreementService } from 'src/app/shared/agreement.service';

@Component({
  selector: 'app-agreement-list',
  templateUrl: './agreement-list.component.html',
  styleUrls: ['./agreement-list.component.css']
})
export class AgreementListComponent implements OnInit {

  list: Agreement[];

  constructor(private service: AgreementService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.listAgreements().subscribe(actionArray => {
      this.list = actionArray.map(item => {
       return {
        id: item.payload.doc.id, 
        ...item.payload.doc.data() as Object
        } as Agreement;
      })
    });
  }

  // mezők updatelése..
  update(agr: Agreement){
    // hozzábindelem a formhoz az adatokat
    this.service.formData = Object.assign({}, agr);
  }

  // mező törlése id alapján..
  delete(id: string, name: string){
    if(confirm("Are you sure you want to delete: " + name + " ?")){
      this.firestore.doc('agreements/'+id).delete();
      this.toastr.warning(name + ' deleted.', 'Agreements API')
    }
  }

}
