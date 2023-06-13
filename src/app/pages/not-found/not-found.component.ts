/*
* Folder: src/app/pages/not-found
* Component: not-found
*     This page is used to display a 404 error page.
*   It is displayed when a page is not found.
*/

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Not Found');
  }
}
