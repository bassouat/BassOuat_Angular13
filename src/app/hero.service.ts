import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {MOCKHEROES} from "./mock-heroes";
import {Observable,of} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() : Observable<Hero[]> {
    const mockheroesObs =  of(MOCKHEROES)
    return mockheroesObs;
}

  constructor() { }
}
