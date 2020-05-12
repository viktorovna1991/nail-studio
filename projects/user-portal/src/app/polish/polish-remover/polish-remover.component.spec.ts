import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolishRemoverComponent } from './polish-remover.component';

describe('PolishRemoverComponent', () => {
  let component: PolishRemoverComponent;
  let fixture: ComponentFixture<PolishRemoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolishRemoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolishRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
