import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Record } from '../../types/record';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record-update-page',
  templateUrl: './record-update-page.component.html',
  styleUrls: ['./record-update-page.component.scss'],
  providers: [RecordService]
})
export class RecordUpdatePageComponent implements OnInit {
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
