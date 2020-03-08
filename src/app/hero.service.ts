import { Injectable } from '@angular/core';
import {Logger} from "./Logger.service"

@Injectable()
export class HeroService{
  private heroes:Hero[];

  constructor(
    private backend:BackendService,
    private logger: Logger
  ){}

  getHeroes(){
    this.backend.getAll(Hero).then( heroes:Hero[] =>{
      this.logger.console.log(`Feteched ${heroes.length} heroes`);
      this.heroes.push(...this.heroes);
    });
  }
}
