import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { RecordCardContainerComponent } from './components/record-card-container/record-card-container.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RecordCardComponent,
    RecordCardContainerComponent
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
        component: RecordCardContainerComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
