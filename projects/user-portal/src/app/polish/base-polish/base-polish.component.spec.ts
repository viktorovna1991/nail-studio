import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasePolishComponent } from './base-polish.component';

describe('BasePolishComponent', () => {
  let component: BasePolishComponent;
  let fixture: ComponentFixture<BasePolishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasePolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasePolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
