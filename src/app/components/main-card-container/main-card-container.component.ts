import { Component, OnInit } from '@angular/core';
import { record } from '../../mocks/record';
import { Record } from '../../types/record';

@Component({
  selector: 'app-main-card-container',
  templateUrl: './main-card-container.component.html',
  styleUrls: ['./main-card-container.component.scss']
})
export class MainCardContainerComponent implements OnInit {

  records: Record[] = [record, record, record];

  constructor() { }

  ngOnInit() {
  }

}
