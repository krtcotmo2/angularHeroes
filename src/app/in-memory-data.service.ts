import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
// in InMemoryDataService the retun value needs to match the api portion of the url
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = _.sortBy([
      {id: 1, name: 'Captain America', identity: 'Steve Rogers', imgMain: '', imgIcon: 'capIcon.png'},
      {id: 2, name: 'Spider-man', identity: 'Peter Parker', imgMain: '', imgIcon: 'spidermanIcon.png'},
      {id: 3, name: 'Falcon', identity: 'Sam Wilson', imgMain: '', imgIcon: 'falconIcon.png'},
      {id: 4, name: 'Silver Surfer', identity: 'Noran Radd', imgMain: '', imgIcon: 'ssIcon.png'},
      {id: 5, name: 'Winter Soldier', identity: 'James "Bucky" Barnes', imgMain: '', imgIcon: 'wsIcon.png'},
      {id: 6, name: 'Black Widow', identity: 'Natasia Romanoff', imgMain: '', imgIcon: 'bwIcon.png'},
      {id: 7, name: 'Black Cat', identity: 'Felecia Hardy', imgMain: '', imgIcon: 'bcIcon.png'},
      {id: 8, name: 'Dare Devil', identity: 'Matt Murdock', imgMain: '', imgIcon: 'ddIcon.png'},
      {id: 9, name: 'Hawkeye', identity: 'Clint Barton', imgMain: '', imgIcon: 'hawkIcon.png'},
      {id: 10, name: 'Nova', identity: 'Frankie Raye', imgMain: '', imgIcon: 'novaIcon.png'},
      {id: 11, name: 'Spider-woman', identity: 'Jessica Drew', imgMain: '', imgIcon: 'swIcon.png'},
      {id: 12, name: 'Silk', identity: 'Cindy Moon', imgMain: '', imgIcon: 'silkIcon.png'},
    ], h => h.name);
    console.log('api call', heroes);
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
