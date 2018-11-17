import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '.';
import { AppRoutingModule } from './_core';
import { HomeComponent, CallbackComponent } from './_pages';
import { TitleService } from './_services';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { AuthService } from './_auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CallbackComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TitleService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
