import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectComponent]
    });
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    component.project = {
      name: 'Research project',
      description: 'A project without a preview image.',
      tags: ['Python'],
      repository: 'https://github.com/example/research'
    };
    fixture.detectChanges();
  });

  it('renders projects without requesting an undefined image', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeNull();
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Research project');
  });

  it('renders an optional preview with an accessible description', () => {
    component.project = { ...component.project, image: 'assets/cuttlefish.png' };
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.getAttribute('src')).toBe('assets/cuttlefish.png');
    expect(image.getAttribute('alt')).toContain('Research project');
  });
});
