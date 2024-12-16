import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudieboomComponent } from './studieboom.component';

describe('StudieboomComponent', () => {
  let component: StudieboomComponent;
  let fixture: ComponentFixture<StudieboomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudieboomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudieboomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
