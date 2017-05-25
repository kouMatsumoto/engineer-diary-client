import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFormPageComponent } from './record-form-page.component';

describe('RecordFormPageComponent', () => {
  let component: RecordFormPageComponent;
  let fixture: ComponentFixture<RecordFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
