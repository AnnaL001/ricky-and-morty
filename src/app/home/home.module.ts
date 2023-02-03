import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule
  ]
})
export class HomeModule { }
