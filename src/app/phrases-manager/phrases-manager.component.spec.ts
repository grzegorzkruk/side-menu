import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesManagerComponent } from './phrases-manager.component';

describe('PhrasesManagerComponent', () => {
  let component: PhrasesManagerComponent;
  let fixture: ComponentFixture<PhrasesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhrasesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhrasesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
