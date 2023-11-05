import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasAreaComponent } from './canvas-area.component';

describe('CanvarAreaComponent', () => {
  let component: CanvasAreaComponent;
  let fixture: ComponentFixture<CanvasAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasAreaComponent]
    });
    fixture = TestBed.createComponent(CanvasAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
