import { Component, OnInit } from '@angular/core';
import { Record } from '../../types/record';
import { RecordService } from '../../services/record.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-record-card-container',
  templateUrl: './record-card-container.component.html',
  styleUrls: ['./record-card-container.component.scss']
})
export class RecordCardContainerComponent implements OnInit {

  records: Observable<Record[]>;

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.fetchRecordsFromServer();
  }
}
