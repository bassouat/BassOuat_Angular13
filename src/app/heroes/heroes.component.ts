import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {MOCKHEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  mockheroes = MOCKHEROES;
  selectedHero? : Hero;
  onSelect(heroS: Hero) :void {
    this.selectedHero = heroS;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
