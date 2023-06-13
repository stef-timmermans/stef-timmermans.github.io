/*
* Folder: src/app/pages/about-me
* Component: about-me
*     This page is used to display information about me.
*/

import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  constructor(private titleService: Title ) {
    this.titleService.setTitle('About Me');
  }
}
