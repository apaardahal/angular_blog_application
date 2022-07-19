import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {HomeComponent} from './admin/home/home.component';
import { IssuesComponent } from './admin/issues/issues.component';
import { ManagementComponent } from './admin/management/management.component';
import { VerificationComponent } from './admin/verification/verification.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'dashboard', component:DashboardComponent},
      {path: 'management', component:ManagementComponent},
      {path: 'issues', component:IssuesComponent},
      {path: 'verification', component:VerificationComponent}
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
