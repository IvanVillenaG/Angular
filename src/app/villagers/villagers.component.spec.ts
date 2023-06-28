import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagersComponent } from './villagers.component';

describe('VillagersComponent', () => {
  let component: VillagersComponent;
  let fixture: ComponentFixture<VillagersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillagersComponent]
    });
    fixture = TestBed.createComponent(VillagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
