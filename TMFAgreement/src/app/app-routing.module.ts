import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AgreementQueryComponent } from './agreements/agreement-query/agreement-query.component';
import { AgreementsComponent } from './agreements/agreements.component';

const routes: Routes = [
  {
    path: 'agreements',
    component: AgreementsComponent
  },
  {
    path: 'querys',
    component: AgreementQueryComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

// tömbbe helyezem a componentjeimet ha késöbb több kellene, egyszerűbb legyen itt
export const routingComponents = [ AgreementsComponent, AgreementQueryComponent ]