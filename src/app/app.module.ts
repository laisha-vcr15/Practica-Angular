import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/components/counter/counter-component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { HeroesModule } from './heroes/heroes.module';
import { MainPageComponent } from './dbz/pages/main-pages.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
