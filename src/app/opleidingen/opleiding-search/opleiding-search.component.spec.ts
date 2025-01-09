import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingSearchComponent } from './opleiding-search.component';

describe('OpleidingSearchComponent', () => {
  let component: OpleidingSearchComponent;
  let fixture: ComponentFixture<OpleidingSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpleidingSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpleidingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
