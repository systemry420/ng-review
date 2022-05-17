import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { PagesModule } from './pages/pages.module';
import { RouterModule, Routes } from '@angular/router';
import { SingleComponent } from './pages/single/single.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    SharedModule,
    PagesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
