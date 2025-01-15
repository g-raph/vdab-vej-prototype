import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingTeaserComponent } from './opleiding-teaser.component';

describe('OpleidingTeaserComponent', () => {
  let component: OpleidingTeaserComponent;
  let fixture: ComponentFixture<OpleidingTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpleidingTeaserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpleidingTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
