import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero} from '../Hero';
import { MessageService } from '../message.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-hero-list',
  templateUrl: './HeroList.component.html',
  styleUrls: ['./HeroList.component.css'],
  providers: [HeroService]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    public msg: MessageService
  ) { }

  ngOnInit() {
    this.msg.addMessage('Attempting to retrieve heroes');
    this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.msg.clearMessages(hero.id);
    this.selectedHero = hero;
  }

}
