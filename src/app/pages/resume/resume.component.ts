/*
* Folder: src/app/pages/resume
* Component: resume
*     This page displays my listed work experience as cards.
*   Each card's information is passed down to the individual
*   company component, which is used to display the information.
*   The company's information is stored in this file. No images
*   are utilized on this page for legal/fair-use reasons.
*/

import { Component } from '@angular/core';
import { config } from 'src/config';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  resumeUrl = config.resumeUrl;

  companies = [
    {
      id: 0,
      name: 'Ocean Recap',
      role: 'Junior Full Stack Software Developer | Dec 2024 — Present',

      description:
        `
          Junior, part-time, and hybrid role at a maritime-focused SaaS startup. Utilized Vue.js
          for frontend development and Symfony (PHP framework) for backend services. Work driven
          by a rigorous focus on single-source-of-truth for legal document PDF output, leveraging
          Twig and PDF-generation libraries.
        `,

      tags: ['Vue.js', 'Symfony', 'Twig', 'SaaS'],
      linkedin: 'https://www.linkedin.com/company/ocean-recap/'
    }
  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle('Resume');

    // Allow for easy appending for list of companies before constructor
    this.companies = this.companies.reverse();
  }
}
