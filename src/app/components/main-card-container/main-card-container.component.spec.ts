import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardContainerComponent } from './main-card-container.component';

describe('MainCardContainerComponent', () => {
  let component: MainCardContainerComponent;
  let fixture: ComponentFixture<MainCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
