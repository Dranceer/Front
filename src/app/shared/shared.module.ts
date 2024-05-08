import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarUserComponent } from './user-components/navbar-user/navbar-user.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    NavbarUserComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],

  exports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    NavbarUserComponent,
    ReactiveFormsModule,
    MatSnackBarModule
  ]
})
export class SharedModule { }
