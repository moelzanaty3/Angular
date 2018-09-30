import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, WidgetService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { WidgetsComponent } from './widgets/widgets.component';
import { NachosComponent } from './nachos/nachos.component';
import { BurritosComponent } from './burritos/burritos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsComponent,
    NachosComponent,
    BurritosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, WidgetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
