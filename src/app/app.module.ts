import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigModule } from './config/config.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfigModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatCardModule
  ]
})
export class AppModule { }
