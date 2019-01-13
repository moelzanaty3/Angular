import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes}  from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
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
