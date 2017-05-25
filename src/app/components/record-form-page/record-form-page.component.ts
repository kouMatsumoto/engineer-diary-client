import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-form-page',
  templateUrl: './record-form-page.component.html',
  styleUrls: ['./record-form-page.component.scss']
})
export class RecordFormPageComponent implements OnInit {

  model = {
    data: new Date(),
    title: '',
    condition: null,
    note: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
