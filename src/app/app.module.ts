import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TodoApiService } from './services/todo/todo-api.service';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CounterService, TodoApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
