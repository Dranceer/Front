import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministrationAccountsComponent } from './administration-accounts/administration-accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { User } from '../Interfaces/User';
import { NavbarUserComponent } from '../shared/user-components/navbar-user/navbar-user.component';
import { HomePageComponent } from '../shared/components/home/home-page.component';


//Angular Material
import {MatTabsModule} from '@angular/material/tabs';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AdministrationAccountsComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
