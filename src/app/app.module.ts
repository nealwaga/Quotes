import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DateCountPipe } from './date-count-pipe/date-count-pipe.component';

@NgModule({
  declarations: [
    AppComponent ,
    QuotesComponent ,
    FormComponent ,
    HighlightDirective ,
    QuoteDetailsComponent ,
    NavBarComponent ,
    DateCountPipe ,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
  ],

  providers: [],
  bootstrap: [AppComponent, QuotesComponent, FormComponent]
})
export class AppModule { }
