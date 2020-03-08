import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackendService } from './backend.service';
import { Logger } from './logger.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './HeroDetail/HeroDetail.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
     BackendService,
     Logger
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
