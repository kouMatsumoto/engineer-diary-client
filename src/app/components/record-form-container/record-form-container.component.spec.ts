import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFormContainerComponent } from './record-form-container.component';

describe('RecordFormContainerComponent', () => {
  let component: RecordFormContainerComponent;
  let fixture: ComponentFixture<RecordFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
