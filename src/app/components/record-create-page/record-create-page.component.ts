import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-create-page',
  templateUrl: './record-create-page.component.html',
  styleUrls: ['./record-create-page.component.scss']
})
export class RecordCreatePageComponent implements OnInit {

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
