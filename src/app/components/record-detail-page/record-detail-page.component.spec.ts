import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordDetailPageComponent } from './record-detail-page.component';

describe('RecordDetailPageComponent', () => {
  let component: RecordDetailPageComponent;
  let fixture: ComponentFixture<RecordDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
