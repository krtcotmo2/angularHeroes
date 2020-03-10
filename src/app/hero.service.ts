import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import {Hero} from './Hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private mgsService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.mgsService.addMessage(`Hero Service received ${HEROES.length} record(s) from the service`);
    return of( HEROES );
  }
  getHero(id: number): Observable<Hero> {
    this.mgsService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
