/*
* Folder: src/app/pages/projects
* Component: projects
*     This page displays the list of projects as cards.
*   Each card's information is passed down to the individual
*   project component, which is used to display the project.
*   The project's information is stored in this file, with
*   the exception to the images, which are stored in the
*   assets folder (src/assets).
*/

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
      name: 'Portfolio Website',

      description:
        `
          You are currently viewing the deployment of this project! This website
          was created using the Angular CLI, and is hosted on GitHub Pages. It loads
          the various pages and elements using components and also uses a specific
          service component to allow for changing the theme via the button in the
          header. Image from the original version of the website, current deployment
          looks slightly different.
        `,

      tags: ['Angular', 'TypeScript', 'GitHub Pages'],
      repository: 'https://github.com/stef-timmermans/stef-timmermans.github.io',
      image: 'assets/home-page.png'
    },
    {
      id: 1,
      name: 'Database Banking Project',

      description:
        `
          This project is a simple application that allows for CRUD operations on
          hypothetical tables that a bank would use. It features triggers that allow
          for automatic updates to balances with transactions and two pages that
          cleanly display JOINs with cascading behavior.
        `,

      tags: ['JavaScript', 'Handlebars', 'SQL'],
      repository: 'https://github.com/OvercastSolutions/banking-database-project',
      image: 'assets/banking-database-project.png'
    },
    {
      id: 2,
      name: 'Cuttlefish',

      description:
        `
          Cuttlefish is a simple, yet powerful, web-based project management tool.
          It allows for the modification of projects, sprints, and tasks, as well as
          the creation of just-in-time Gantt charts. Cuttlefish was done as a
          part of the Oregon State University 2023 College of Engineering Capstone
          program (CS Team 95).
        `,

      tags: ['Angular', 'TypeScript', 'C#', 'SQL', '.NET', 'Azure'],
      repository: 'https://github.com/NathanJesudason/Cuttlefish',
      image: 'assets/cuttlefish.png'
    }
  ]

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Projects');

    // Allow for easy appending for list of projects before constructor
    this.projects = this.projects.reverse();
  }
}
