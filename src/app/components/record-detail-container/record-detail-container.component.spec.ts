import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailContainerComponent } from './record-detail-container.component';

describe('RecordDetailContainerComponent', () => {
  let component: RecordDetailContainerComponent;
  let fixture: ComponentFixture<RecordDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
