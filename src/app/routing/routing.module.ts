import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordCardContainerComponent } from '../components/record-card-container/record-card-container.component';
import { RecordDetailContainerComponent } from '../components/record-detail-container/record-detail-container.component';


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
    path: 'records/:id',
    component: RecordDetailContainerComponent
  },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
