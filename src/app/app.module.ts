import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './main/add/add.component';
import { StatisticComponent } from './main/statistic/statistic.component';
import { QuizComponent } from './main/quiz/quiz.component';
import { SearchComponent } from './main/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    StatisticComponent,
    QuizComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
