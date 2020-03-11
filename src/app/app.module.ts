// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
// import { from } from 'rxjs';

// Services
// import { BackendService } from './backend.service';
import { Logger } from './logger.service';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './Heroes/Heroes.component';
import { HeroListComponent } from './HeroList/HeroList.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
   declarations: [
      AppComponent,
      HeroesComponent,
      HeroListComponent,
      MessagesComponent,
      DashboardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, {dataEncapsulation: false}
      )
   ],
   providers: [
      // BackendService,
      Logger
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
