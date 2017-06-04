import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Record } from '../../types/record';
import { RecordService } from '../../services/record.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RecordResolver implements Resolve<Record> {
  constructor(private recordService: RecordService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Record> {
    return this.recordService
      .fetchRecordById(route.params['id'])
      .first();
  }
}
