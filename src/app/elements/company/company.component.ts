/*
* Folder: src/app/elements/company
* Component: company
*     This component is used to display a company. It is
*   called by the resume component's HTML and is passed the
*   company's information. These fields are the project's ID
*   number, name, role, description, tags, and LinkedIn page.
*/

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  @Input() id!: number;
  @Input() name!: string;
  @Input() role!: string;
  @Input() description!: string;
  @Input() tags!: string[];
  @Input() linkedin!: string;

}
