import { NgIfContext } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, Observer, PartialObserver, pipe, take } from 'rxjs';
import { CHARACTER_URL } from 'src/app/config/app-config';
import { Config } from 'src/app/config/models/config';
import { Character } from 'src/app/home/model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characterUrl = "https://rickandmortyapi.com/api/character";
  _characters: any;

  constructor(private _http: HttpClient) {}

  sendRequest$(){
    return this._http.get<any>(this.characterUrl).pipe(
      take(20)
      );
  }

  handleResponse(observer: Partial<Observer<any>>){
    return this.sendRequest$().subscribe(observer);
  }
}
