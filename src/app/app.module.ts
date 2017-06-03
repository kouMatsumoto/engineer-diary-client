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
import { RoutingModule } from './routing/routing.module';
import { RecordFormPageComponent } from './components/record-form-page/record-form-page.component';
import { RecordFormComponent } from './components/record-form/record-form.component';
import { RecordDetailPageComponent } from './components/record-detail-page/record-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordCardComponent,
    RecordCardContainerComponent,
    RecordFormPageComponent,
    RecordFormComponent,
    RecordDetailPageComponent
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
