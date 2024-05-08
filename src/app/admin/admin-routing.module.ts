import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministrationAccountsComponent } from './administration-accounts/administration-accounts.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard', component: DashboardComponent 
  },
  
  {
    path: 'administration-accounts', component:AdministrationAccountsComponent
  },

  { 
    path: '**', redirectTo:'dashboard', pathMatch:'full' 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
