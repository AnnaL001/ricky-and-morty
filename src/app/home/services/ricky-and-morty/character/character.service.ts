import { NgIfContext } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, take } from 'rxjs';
import { CHARACTER_URL } from 'src/app/config/app-config';
import { Config } from 'src/app/config/models/config';
import { Character } from 'src/app/home/model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterUrl = "https://rickandmortyapi.com/api/character";
  characters!: Character[];

  constructor(private _http: HttpClient) {}

  sendRequest(){
    return this._http.get<any>(this.characterUrl).pipe(
      take(20),
      catchError(err => {
        throw "An error occurred" + err
      })
      );
  }

  handleResponse(){
    this.sendRequest().subscribe(response => {
      this.characters = response.results.map((response: any) => {
        response.id,
        response.name,
        response.status,
        response.species,
        response.location.name,
        response.episode[0]
      })
      console.log(this.characters)
    });
  }
}
