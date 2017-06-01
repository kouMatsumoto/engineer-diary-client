import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'app-record-form-container',
  templateUrl: './record-form-container.component.html',
  styleUrls: ['./record-form-container.component.scss'],
  providers: [RecordService]
})
export class RecordFormContainerComponent implements OnInit {
  private isSubmitted: boolean;

  model = {
    date: new Date(),
    title: '',
    condition: null,
    note: ''
  };

  constructor(private recordService: RecordService) { }


  /**
   * Initialize properties of this class.
   */
  ngOnInit() {
    this.resetForm();
  }

  /**
   * When #recordForm is submitted.
   */
  onSubmit() {
    if (this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;
    this.recordService.createNewRecord(this.model)
      .subscribe(data => {
        console.log(data, 'data has been created');
        this.resetForm();
        // @todo: add notification of success.
      });
  }

  /**
   * This method is executed
   *   - when this component is being initialized
   *   - when creating data finishes
   *
   * @todo: need to initialize state of md-inputs (e.g. dirty)
   */
  resetForm() {
    this.model = {
      date: new Date(),
      title: '',
      condition: null,
      note: ''
    };

    this.isSubmitted = false;
  }


  /**
   * to confirm what model includes
   * TODO: this method is temporary method to develop
   */
  showModel(): string {
    return JSON.stringify(this.model);
  }
}
