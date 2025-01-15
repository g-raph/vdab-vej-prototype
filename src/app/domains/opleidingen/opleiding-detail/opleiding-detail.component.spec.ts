import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingDetailComponent } from './opleiding-detail.component';

describe('OpleidingDetailComponent', () => {
  let component: OpleidingDetailComponent;
  let fixture: ComponentFixture<OpleidingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpleidingDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpleidingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
