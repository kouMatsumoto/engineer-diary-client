import { Component, OnInit } from '@angular/core';
import { Record } from '../../types/record';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record-card-container',
  providers: [RecordService],
  templateUrl: './record-card-container.component.html',
  styleUrls: ['./record-card-container.component.scss']
})
export class RecordCardContainerComponent implements OnInit {

  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

}
