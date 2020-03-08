import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';

@Component({
  selector: 'app-HeroList',
  templateUrl: './HeroList.component.html',
  styleUrls: ['./HeroList.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  // need to create Hero Class
  heroes: Hero[];
  selectedHero: Hero;

  // need to create HeroService
  constructor(
    private service: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
