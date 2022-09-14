import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {MOCKHEROES} from "./mock-heroes";
import {Observable,of} from "rxjs";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes() : Observable<Hero[]> {
    const mockheroesObs =  of(MOCKHEROES)
    this.messageService.add('HeroService :  fetched heroes')
    return mockheroesObs;
}

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = MOCKHEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  constructor(private messageService : MessageService) { }
}
