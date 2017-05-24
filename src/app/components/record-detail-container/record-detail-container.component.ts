import { Component, OnInit } from '@angular/core';
import { Record } from '../../types/record';
import { ActivatedRoute, Params } from '@angular/router';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record-detail-container',
  providers: [RecordService],
  templateUrl: './record-detail-container.component.html',
  styleUrls: ['./record-detail-container.component.scss']
})
export class RecordDetailContainerComponent implements OnInit {

  record: Record;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.recordService.getRecordById(params['id']))
      .subscribe((record => this.record = record));
  }
}
