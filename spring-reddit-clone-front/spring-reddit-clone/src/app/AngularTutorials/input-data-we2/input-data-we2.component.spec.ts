import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataWe2Component } from './input-data-we2.component';

describe('InputDataWe2Component', () => {
  let component: InputDataWe2Component;
  let fixture: ComponentFixture<InputDataWe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataWe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataWe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
