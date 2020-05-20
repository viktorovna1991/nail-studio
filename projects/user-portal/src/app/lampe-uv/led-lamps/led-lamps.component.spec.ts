import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedLampsComponent } from './led-lamps.component';

describe('LedLampsComponent', () => {
  let component: LedLampsComponent;
  let fixture: ComponentFixture<LedLampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedLampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
