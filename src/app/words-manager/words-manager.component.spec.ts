import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsManagerComponent } from './words-manager.component';

describe('WordsManagerComponent', () => {
  let component: WordsManagerComponent;
  let fixture: ComponentFixture<WordsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
