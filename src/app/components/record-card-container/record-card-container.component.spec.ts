import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCardContainerComponent } from './record-card-container.component';

describe('RecordCardContainerComponent', () => {
  let component: RecordCardContainerComponent;
  let fixture: ComponentFixture<RecordCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
