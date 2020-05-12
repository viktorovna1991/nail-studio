import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPolishComponent } from './top-polish.component';

describe('TopPolishComponent', () => {
  let component: TopPolishComponent;
  let fixture: ComponentFixture<TopPolishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPolishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPolishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
