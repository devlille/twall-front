import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TweetsCardComponent} from './tweets-card.component';

describe('TweetsCardComponent', () => {
  let component: TweetsCardComponent;
  let fixture: ComponentFixture<TweetsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
