import { Component, OnInit ,Input} from '@angular/core';
import {Hero} from "../hero";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() heroDetail? : Hero;
  constructor(private heroService : HeroService , private location : Location,private route : ActivatedRoute) { }

  ngOnInit(): void {
    /*this.getHero();*/
    this.getHeroName();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(heroDetail => this.heroDetail = heroDetail);
  }

  getHeroName(): void {
    let name = this.route.snapshot.paramMap.get('name');
    this.heroService.getHero_by_Name(name)
      .subscribe(heroDetail => this.heroDetail = heroDetail);
  }

  goBack():void {
    this.location.back();
  }

  save(): void {
    if (this.heroDetail) {
      this.heroService.updateHero(this.heroDetail)
        .subscribe(() => this.goBack());
    }
  }
}
