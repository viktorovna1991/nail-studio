import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvLampsComponent } from './uv-lamps.component';

describe('UvLampsComponent', () => {
  let component: UvLampsComponent;
  let fixture: ComponentFixture<UvLampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvLampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
