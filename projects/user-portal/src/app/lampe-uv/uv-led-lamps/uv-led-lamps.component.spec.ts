import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvLedLampsComponent } from './uv-led-lamps.component';

describe('UvLedLampsComponent', () => {
  let component: UvLedLampsComponent;
  let fixture: ComponentFixture<UvLedLampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvLedLampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLedLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
