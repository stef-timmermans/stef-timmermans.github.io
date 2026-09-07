import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from '../../elements/project/project.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, ProjectComponent]
    });
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('keeps the banking project and portfolio after the research and capstone', () => {
    const headings = Array.from(fixture.nativeElement.querySelectorAll('h2'))
      .map((heading: any) => heading.textContent.trim());
    expect(headings.length).toBe(5);
    expect(headings.slice(-2)).toEqual(['Database Banking Project', 'Portfolio Website']);
  });
});
