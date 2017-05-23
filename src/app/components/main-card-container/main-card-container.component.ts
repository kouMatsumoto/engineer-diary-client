import { Component, OnInit } from '@angular/core';
import { Record } from '../../types/record';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-main-card-container',
  providers: [RecordService],
  templateUrl: './main-card-container.component.html',
  styleUrls: ['./main-card-container.component.scss']
})
export class MainCardContainerComponent implements OnInit {

  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords(): void {
    this.records = this.recordService.getRecords();
  }

}
