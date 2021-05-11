import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBooksComponent } from './pages/search-books/search-books.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    DashBoardComponent,
    NotPageFoundComponent,
    PagesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
