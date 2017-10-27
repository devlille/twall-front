import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsTileComponent } from './tweets-tile.component';

describe('TweetsTileComponent', () => {
  let component: TweetsTileComponent;
  let fixture: ComponentFixture<TweetsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
