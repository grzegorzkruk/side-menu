import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsManagerComponent } from './constants-manager.component';

describe('ConstantsManagerComponent', () => {
  let component: ConstantsManagerComponent;
  let fixture: ComponentFixture<ConstantsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
