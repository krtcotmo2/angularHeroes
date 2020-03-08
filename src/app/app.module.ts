//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//import { from } from 'rxjs';

//Services
//import { BackendService } from './backend.service';
import { Logger } from './logger.service';

//Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './Heroes/Heroes.component';
import { HeroListComponent } from './HeroList/HeroList.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroListComponent,
      MessagesComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [
      //BackendService,
      Logger
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
