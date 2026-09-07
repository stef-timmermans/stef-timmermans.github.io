import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PROJECTS } from './projects.data';
import { Project } from '../../elements/project/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  readonly projects = PROJECTS;

  constructor(titleService: Title) {
    titleService.setTitle('Projects | Stef Timmermans');
  }

  trackProject(_index: number, project: Project): string {
    return project.repository;
  }
}
