import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '.';
import { AppRoutingModule } from './_core';
import { HomeComponent } from './_pages';
import { TitleService } from './_services';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
