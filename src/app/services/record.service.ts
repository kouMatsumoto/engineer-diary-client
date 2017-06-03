import { Injectable } from '@angular/core';
import { RECORDS } from '../mocks/record';
import { Record } from '../types/record';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';


@Injectable()
export class RecordService {
  apiUrl: string = environment.apiPrefix + 'records/';

  constructor(private http: Http) { }

  /**
   * create a new record with sending data to server
   */
  createNewRecord(data: any): Observable<Record> {
    return this.http
      .post(this.apiUrl, data)
      .map(response => {
        console.log('post response', response);
        return <Record>response.json().data;
      });
  }

  /**
   * Delete a specific record from server.
   *
   * @param id
   * @return {Observable<Record>}
   */
  deleteOne(id: string): Observable<Record> {
    return this.http
      .delete(this.apiUrl + id)
      .map(response => <Record>response.json().data);
  }

  /**
   * Fetch all records from server.
   *
   * @todo: implement query to filter records.
   * @return {Observable<Record[]>}
   */
  fetchRecordsFromServer(): Observable<Record[]> {
    return this.http
      .get(this.apiUrl)
      .map(response => <Record[]>response.json().data);
  }

  /**
   * Fetch a record by id from api-server.
   */
  fetchRecordById(id: string): Observable<Record> {
    return this.http
      .get(this.apiUrl + id)
      .map(response => <Record>response.json().data);
  }
}
