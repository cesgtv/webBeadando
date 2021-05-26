import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AgreementService } from 'src/app/shared/agreement.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  constructor(public service: AgreementService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
      
    this.service.formData ={
      id: null,
      name: '',
      description: '',
      agreementType: '',
      status: '',
      agreementPeriod: null,
      version: ''
    }
  }


  // rekord hozzáadasa
 add(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;

    if (form.value.id == null){
      this.firestore.collection('agreements').add(data);
    } else {
      this.firestore.doc('agreements/'+form.value.id).update(data);
    }

    this.resetForm(form);
    this.toastr.success('Agreement Added!', 'Agreements API')
  }

}
