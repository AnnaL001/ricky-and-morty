import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Observer, pipe, Subscription } from 'rxjs';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/ricky-and-morty/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  characters!: Character[];
  characters$: Subscription = new Subscription;

  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this.characters$ = this._characterService.handleResponse({
      next: response => {
        this.characters = response.results;
        console.log(this.characters);
      },
      error: error => {
        console.error(error)
      }
    });
  }

  ngOnDestroy(): void {
    this.characters$.unsubscribe();
  }

}
