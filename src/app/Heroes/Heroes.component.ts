// HERO CARD
import { Component, Input, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './Heroes.component.html',
  styleUrls: ['./Heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;
  @Input() showBtn: boolean;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private messageService: MessageService,
    private location: Location) { }

  ngOnInit() {
    if (!this.hero) {
      this.getHero();
    }
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => {
      this.messageService.addMessage(`Getting data for hero ${id} ${hero.name}`);
      this.showBtn = true;
      this.hero = hero;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
