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
import { RecordCreatePageComponent } from './components/record-create-page/record-create-page.component';
import { RecordFormComponent } from './components/record-form/record-form.component';
import { RecordDetailPageComponent } from './components/record-detail-page/record-detail-page.component';
import { RecordUpdatePageComponent } from './components/record-update-page/record-update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordCardComponent,
    RecordCardContainerComponent,
    RecordCreatePageComponent,
    RecordFormComponent,
    RecordDetailPageComponent,
    RecordUpdatePageComponent
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
