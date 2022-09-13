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

  constructor(private messageService : MessageService) { }
}
