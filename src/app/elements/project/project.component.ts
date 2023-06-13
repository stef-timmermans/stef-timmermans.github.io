/*
* Folder: src/app/elements/project
* Component: project
*     This component is used to display a project. It is
*   called by the project's component's HTML and is passed
*   the project's information. These fields are the project's
*   ID number, name, description, tags, repository link, and
*   image location.
*/

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  @Input() repository!: string;
  @Input() image!: string;

}
