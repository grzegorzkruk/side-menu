import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnProgressComponent } from './an-progress.component';

describe('AnProgressComponent', () => {
  let component: AnProgressComponent;
  let fixture: ComponentFixture<AnProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
