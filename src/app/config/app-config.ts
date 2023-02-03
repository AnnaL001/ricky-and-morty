import { InjectionToken } from "@angular/core";
import { Config } from "./models/config";

export const CHARACTER_URL = new InjectionToken<Config>('https://rickandmortyapi.com/api/character');
