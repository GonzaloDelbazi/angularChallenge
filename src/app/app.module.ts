import { NgModule } from '@angular/core';

// MODULES
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule } from '@angular/forms';


// COMPONENTS
import { AppComponent } from './app.component';
import { SearchBooksComponent } from './pages/search-books/search-books.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { PagesComponent } from './pages/pages.component';
import { NotPageFoundComponent } from './components/not-page-found/not-page-found.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardComponent } from './components/card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    DashBoardComponent,
    NotPageFoundComponent,
    PagesComponent,
    NavBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
