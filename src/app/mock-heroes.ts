import {Hero} from './Hero';
import * as _ from 'lodash';

export const HEROES: Hero[] = _.sortBy([
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
