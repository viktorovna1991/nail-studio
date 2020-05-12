import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishPaletteComponent } from './polish-palette.component';

describe('PolishPaletteComponent', () => {
  let component: PolishPaletteComponent;
  let fixture: ComponentFixture<PolishPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
