import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Record } from '../../types/record';

@Component({
  selector: 'app-record-update-page',
  templateUrl: './record-update-page.component.html',
  styleUrls: ['./record-update-page.component.scss']
})
export class RecordUpdatePageComponent implements OnInit {
  record: Record;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.record = data['record']);
  }
}
