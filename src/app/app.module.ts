import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { RecordCardContainerComponent } from './components/record-card-container/record-card-container.component';
import { RecordDetailContainerComponent } from './components/record-detail-container/record-detail-container.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecordCardComponent,
    RecordCardContainerComponent,
    RecordDetailContainerComponent
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
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
