import { Component, OnInit } from '@angular/core';
import { record } from '../../mocks/record';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  // this is data used to display
  data = record;

  constructor() { }

  ngOnInit() {
  }

}
