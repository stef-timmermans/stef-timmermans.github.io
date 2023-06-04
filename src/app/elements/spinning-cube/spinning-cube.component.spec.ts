import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningCubeComponent } from './spinning-cube.component';

describe('SpinningCubeComponent', () => {
  let component: SpinningCubeComponent;
  let fixture: ComponentFixture<SpinningCubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinningCubeComponent]
    });
    fixture = TestBed.createComponent(SpinningCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
