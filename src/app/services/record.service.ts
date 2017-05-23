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
}
