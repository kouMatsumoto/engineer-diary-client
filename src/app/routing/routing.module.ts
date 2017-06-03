import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordCardContainerComponent } from '../components/record-card-container/record-card-container.component';
import { RecordCreatePageComponent } from '../components/record-create-page/record-create-page.component';
import { RecordDetailPageComponent } from '../components/record-detail-page/record-detail-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/records',
    pathMatch: 'full'
  },
  {
    path: 'records',
    component: RecordCardContainerComponent
  },
  {
    path: 'records/new',
    component: RecordCreatePageComponent
  },
  {
    path: 'records/:id',
    component: RecordDetailPageComponent
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
