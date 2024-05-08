import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomePageComponent } from './shared/components/home/home-page.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from './shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

//Import Components
import { ViewPostsComponent } from './post/view-posts/view-posts.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    SharedModule,
    MatButtonToggleModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
