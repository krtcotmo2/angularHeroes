import { Component, Input } from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './Heroes.component.html',
  styleUrls: ['./Heroes.component.css']
})
export class HeroesComponent {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
