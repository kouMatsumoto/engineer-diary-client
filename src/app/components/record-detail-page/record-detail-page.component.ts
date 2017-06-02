import { Component, OnInit } from '@angular/core';
import { Record } from '../../types/record';
import { ActivatedRoute, Params } from '@angular/router';
import { RecordService } from '../../services/record.service';


@Component({
  selector: 'app-record-detail-page',
  templateUrl: './record-detail-page.component.html',
  styleUrls: ['./record-detail-page.component.scss'],
  providers: [RecordService]
})
export class RecordDetailPageComponent implements OnInit {
  record: Record;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.recordService.fetchRecordById(params['id']))
      .subscribe((record: Record) => this.record = record);
  }
}
