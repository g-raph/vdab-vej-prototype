import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapglComponent } from './mapgl.component';

describe('MapglComponent', () => {
  let component: MapglComponent;
  let fixture: ComponentFixture<MapglComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapglComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapglComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
