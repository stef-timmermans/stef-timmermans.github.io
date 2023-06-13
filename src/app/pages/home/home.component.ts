/*
* Folder: src/app/pages/home
* Component: home
*     This page is used to display my name, a short description
*   of myself, and any immediately important links. It is the
*   first page that is displayed when the website is loaded.
*/

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private titleService: Title ) {
    this.titleService.setTitle('Home');
  }
}
