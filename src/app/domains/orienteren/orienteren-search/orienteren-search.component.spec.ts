import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrienterenSearchComponent } from './orienteren-search.component';

describe('OrienterenSearchComponent', () => {
  let component: OrienterenSearchComponent;
  let fixture: ComponentFixture<OrienterenSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrienterenSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrienterenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
