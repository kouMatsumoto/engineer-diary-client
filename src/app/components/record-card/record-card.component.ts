import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../types/record';


@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss']
})
export class RecordCardComponent implements OnInit {

  // this is used to display
  @Input() record: Record;

  constructor() { }

  ngOnInit() {
  }

}
