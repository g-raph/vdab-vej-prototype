import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GebouwenficheComponent } from './gebouwenfiche.component';

describe('GebouwenficheComponent', () => {
  let component: GebouwenficheComponent;
  let fixture: ComponentFixture<GebouwenficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GebouwenficheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GebouwenficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
