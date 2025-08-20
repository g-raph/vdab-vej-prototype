import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbarAnimationComponent } from './tabbar-animation.component';

describe('TabbarAnimationComponent', () => {
  let component: TabbarAnimationComponent;
  let fixture: ComponentFixture<TabbarAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbarAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbarAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
