import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsGridListComponent } from './tweets-grid-list.component';

describe('TweetsGridListComponent', () => {
  let component: TweetsGridListComponent;
  let fixture: ComponentFixture<TweetsGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
