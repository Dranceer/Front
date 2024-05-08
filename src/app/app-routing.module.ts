import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/components/home/home-page.component';
import { authAdminGuard } from './core/guards/admin/admin.guard';
import { authCreatorGuard } from './core/guards/creator/creator.guard';
import { authDonorGuard } from './core/guards/donor/donor.guard';

const routes: Routes = [

  {
    path: '', redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home', component: HomePageComponent 
  },

  {
    path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule)
  },

  { 
    path: 'post', loadChildren: () => import('./post/post.module').then(m=>m.PostModule)
  },

  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  { 
    path: '**', redirectTo:'home', pathMatch:'full' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
