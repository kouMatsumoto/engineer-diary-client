import { Injectable } from '@angular/core';
import { RECORDS } from '../mocks/record';
import { Record } from '../types/record';

@Injectable()
export class RecordService {

  constructor() { }

  // TODO: implement with http
  getRecords(): Record[] {
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
