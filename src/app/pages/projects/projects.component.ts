import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      id: 0,
      name: 'Database Banking Project',

      description:
        `
          This project is a simple application that allows for CRUD operation on
          hypothetical tables that a bank would use.
        `,
      
      tags: ['JavaScipt', 'Handlebars', 'SQL'],
      repository: 'https://github.com/OvercastSolutions/banking-database-project',
      image: ''
    },

    {
      id: 1,
      name: 'Portfolio Website',

      description:
        `
          You are currently viewing the deployment of this project! This website
          was created using the Angular CLI, and is hosted on GitHub Pages. It allows
          for navigating pages using components, and uses custom services to change
          the theme and send emails to the owner.
        `,
        
      tags: ['Angular', 'TypeScript', 'GitHub Pages'],
      repository: 'https://github.com/stef-timmermans/stef-timmermans.github.io',
      image: ''
    },

    {
      id: 2, 
      name: 'Cuttlefish',

      description: 
        `
          Cuttlefish is a simple, yet powerful, web-based project management tool.
          It allows for the creation of projects, tasks, and sprints, as well as
          creation for just-in-time Gantt charts. Cuttlefish was completed as a
          part of the Oregon State University 2023 College of Engineering Capstone
          program.
        `,

      tags: ['Angular', 'TypeScript', 'C#', 'SQL', '.NET', 'Azure'],
      repository: 'https://github.com/NathanJesudason/Cuttlefish',
      image: ''
    }
  ]

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Projects');

    // Allow for easy appending for list of projects
    this.projects = this.projects.reverse();
  }
}
