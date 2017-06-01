import { Injectable } from '@angular/core';
import { RECORDS } from '../mocks/record';
import { Record } from '../types/record';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class RecordService {
  apiUrl: string;

  constructor(private http: Http) {
    this.apiUrl = environment.apiPrefix + 'records/';
  }

  fetchRecordsFromServer(): Observable<Record[]> {
    return this.http
      .get(this.apiUrl)
      .map(response => <Record[]>response.json().data);
  }

  // TODO: implement with http
  getRecords(): Record[] {
    this.fetchRecordsFromServer();
    return RECORDS;
  }

  getRecordById(id: string): Promise<Record> {
    return new Promise((resolve, reject) => {
      const records = this.getRecords();
      for (const r of records) {
        if (r.id === id) {
          return resolve(r);
        }
      }

      reject(new Error('Not found'));
    });
  }
}
