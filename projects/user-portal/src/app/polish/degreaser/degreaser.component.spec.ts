import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreaserComponent } from './degreaser.component';

describe('DegreaserComponent', () => {
  let component: DegreaserComponent;
  let fixture: ComponentFixture<DegreaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegreaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
