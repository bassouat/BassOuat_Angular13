import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  mockheroes: Hero[]=[];

  constructor(private heroService : HeroService ) { }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(mockheroes => this.mockheroes = mockheroes)
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.mockheroes.push(hero);
      });
  }
  ngOnInit(): void {
    this.getHeroes();
  }

}
