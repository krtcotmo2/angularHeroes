import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';
import { HEROES} from '../mock-heroes';

@Component({
  selector: 'app-hero-list',
  templateUrl: './HeroList.component.html',
  styleUrls: ['./HeroList.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  // need to create HeroService
  constructor(
    private service: HeroService
  ) { }

  ngOnInit() {

    // this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
