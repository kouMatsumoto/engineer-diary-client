import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-form-container',
  templateUrl: './record-form-container.component.html',
  styleUrls: ['./record-form-container.component.scss']
})
export class RecordFormContainerComponent implements OnInit {

  model = {
    date: new Date(),
    title: '',
    condition: null,
    note: ''
  };

  constructor() { }

  ngOnInit() {
  }


  /**
   * to confirm what model includes
   * TODO: this method is temporary method to develop
   */
  showModel(): string {
    return JSON.stringify(this.model);
  }
}
