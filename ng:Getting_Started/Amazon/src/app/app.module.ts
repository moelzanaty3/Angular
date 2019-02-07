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
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ProductDetailsComponent } from './product-list/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    /* Pipes */
    ConvertToSpacePipe,
    FilterPipe,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
