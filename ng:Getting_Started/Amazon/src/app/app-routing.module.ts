import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes}  from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
