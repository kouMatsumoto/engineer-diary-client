import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RecordService } from '../../services/record.service';
import { Record, RecordSeed } from '../../types/record';

@Component({
  selector: 'app-record-form',
  templateUrl: './record-form.component.html',
  styleUrls: ['./record-form.component.scss']
})
export class RecordFormComponent implements OnInit, OnChanges {
  private isSubmitted: boolean;
  /** whether this form is used to update record */
  @Input()
  update: Record;

  model: RecordSeed;

  constructor(private recordService: RecordService) { }

  /**
   * Initialize properties of this class.
   */
  ngOnInit() {
    this.isSubmitted = false;
    this.setOrInitModel();
  }

  ngOnChanges() {
    if (this.update) {
      this.setOrInitModel();
    }
  }

  private getNewModel(): RecordSeed {
    return {
      date: new Date(),
      title: '',
      condition: null,
      note: ''
    };
  }

  /**
   * When #recordForm is submitted.
   */
  onSubmit() {
    if (this.update) {
      this.submitToUpdate();
    } else {
      this.submitToCreate();
    }
  }

  setOrInitModel() {
    if (this.update) {
      this.model = Object.assign({}, this.update);
    } else {
      this.model = this.getNewModel();
    }
  }

  submitToCreate(): void {
    if (this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;
    this.recordService.createNewRecord(this.model)
      .subscribe(data => {
        console.log(data, 'data has been created');
        this.model = this.getNewModel(); // reset form
        this.isSubmitted = false;
        // @todo: add notification of success.
      });
  }

  submitToUpdate() {
    if (this.isSubmitted) {
      return;
    }

    this.isSubmitted = true;
    this.recordService.updateRecordById(this.update.id, this.model)
      .subscribe(data => {
        console.log(data, 'data has been updated');
        this.isSubmitted = false;
        // @todo: add notification of success.
      });
  }
}
