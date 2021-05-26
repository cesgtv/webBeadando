import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { AgreementComponent } from './agreements/agreement/agreement.component';
import { AgreementListComponent } from './agreements/agreement-list/agreement-list.component';
import { AgreementService } from './shared/agreement.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AgreementComponent,
    AgreementListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AgreementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
