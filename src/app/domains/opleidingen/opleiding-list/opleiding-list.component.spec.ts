import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingListComponent } from './opleiding-list.component';

describe('OpleidingListComponent', () => {
  let component: OpleidingListComponent;
  let fixture: ComponentFixture<OpleidingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpleidingListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpleidingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
