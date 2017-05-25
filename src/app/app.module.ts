import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdDatepickerModule, MdInputModule, MdNativeDateModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { RecordCardComponent } from './components/record-card/record-card.component';
import { RecordCardContainerComponent } from './components/record-card-container/record-card-container.component';
import { RecordDetailContainerComponent } from './components/record-detail-container/record-detail-container.component';
import { RoutingModule } from './routing/routing.module';
import { RecordFormPageComponent } from './components/record-form-page/record-form-page.component';
import { RecordFormContainerComponent } from './components/record-form-container/record-form-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordCardComponent,
    RecordCardContainerComponent,
    RecordDetailContainerComponent,
    RecordFormPageComponent,
    RecordFormContainerComponent
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
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
