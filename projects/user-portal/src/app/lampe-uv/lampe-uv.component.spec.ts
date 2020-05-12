import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampeUVComponent } from './lampe-uv.component';

describe('LampeUVComponent', () => {
  let component: LampeUVComponent;
  let fixture: ComponentFixture<LampeUVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampeUVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampeUVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
