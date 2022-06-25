import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPolicyComponent } from './search-policy.component';

describe('SearchPolicyComponent', () => {
  let component: SearchPolicyComponent;
  let fixture: ComponentFixture<SearchPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
