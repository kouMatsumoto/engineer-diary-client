import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MainCardContainerComponent } from './components/main-card-container/main-card-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainCardComponent,
    MainCardContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/records',
        pathMatch: 'full'
      },
      {
        path: 'records',
        component: MainCardContainerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
