import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/ricky-and-morty/character/character.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  constructor(private _characterService: CharacterService) { }

  ngOnInit(): void {
    this._characterService.handleResponse();
  }

}
