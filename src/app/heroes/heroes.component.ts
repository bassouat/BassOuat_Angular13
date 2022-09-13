import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  mockheroes: Hero[]=[];
  selectedHero? : Hero;
  onSelect(heroS: Hero) :void {
    this.selectedHero = heroS;

    //On utilise des quotes dans le sens gauche afin d'appliquer les valeurs dynamiques des id
    this.messageService.add(`HeroesComponent: Selected hero id=${heroS.id}`);
  }
  constructor(private heroService : HeroService , private messageService : MessageService) { }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(mockheroes => this.mockheroes = mockheroes)
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
