import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-HeroList',
  templateUrl: './HeroList.component.html',
  styleUrls: ['./HeroList.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  //need to create Hero Class
  heroes: Hero[];
  selectedHero: Hero;

  //nned to create HeroService
  constructor(
    private service: HeroService
  ) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectedHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
