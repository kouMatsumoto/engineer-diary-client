import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordUpdatePageComponent } from './record-update-page.component';

describe('RecordUpdatePageComponent', () => {
  let component: RecordUpdatePageComponent;
  let fixture: ComponentFixture<RecordUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
