import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnSideMenuComponent } from './an-side-menu.component';

describe('AnSideMenuComponent', () => {
  let component: AnSideMenuComponent;
  let fixture: ComponentFixture<AnSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
