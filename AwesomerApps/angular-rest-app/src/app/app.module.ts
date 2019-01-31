import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';

import { ItemsService, WidgetService } from './shared';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NachosComponent } from './nachos/nachos.component';
import { BurritosComponent } from './burritos/burritos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ColorComponent } from './burritos/color/color.component';

import {
  ItemsComponent,
  ItemsListComponent,
  ItemDetailComponent,
  ItemSearchComponent
} from './items';
import {
  WidgetsComponent,
  WidgetListComponent,
  WidgetDetailComponent,
  WidgetSearchComponent
} from './widegts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    NachosComponent,
    BurritosComponent,
    ReviewsComponent,
    WidgetDetailComponent,
    WidgetListComponent,
    ItemSearchComponent,
    ColorComponent,
    WidgetSearchComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    ColorPickerModule
  ],
  providers: [ItemsService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
