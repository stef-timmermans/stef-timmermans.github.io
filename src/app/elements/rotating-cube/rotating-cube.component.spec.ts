import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingCubeComponent } from './rotating-cube.component';

describe('RotatingCubeComponent', () => {
  let component: RotatingCubeComponent;
  let fixture: ComponentFixture<RotatingCubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotatingCubeComponent]
    });
    fixture = TestBed.createComponent(RotatingCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
