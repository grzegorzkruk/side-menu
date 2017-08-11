import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnBtnBurgerComponent } from './an-btn-burger.component';

describe('AnBtnBurgerComponent', () => {
  let component: AnBtnBurgerComponent;
  let fixture: ComponentFixture<AnBtnBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnBtnBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnBtnBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
