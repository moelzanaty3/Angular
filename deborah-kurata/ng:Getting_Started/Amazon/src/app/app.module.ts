import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/components/star/star.component';
import { ConvertToSpacePipe } from './shared/pipes/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    /* Pipes */
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
