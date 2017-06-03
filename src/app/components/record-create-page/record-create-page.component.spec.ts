import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCreatePageComponent } from './record-create-page.component';

describe('RecordCreatePageComponent', () => {
  let component: RecordCreatePageComponent;
  let fixture: ComponentFixture<RecordCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
