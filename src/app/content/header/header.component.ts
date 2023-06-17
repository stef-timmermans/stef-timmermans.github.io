/*
* Folder: src/app/content/header
* Component: header
*     The header component is used to display the header
*   of the website. It is displayed on every page. It has
*   a navigation bar that is used to navigate between pages.
*   The home button is displayed as a spinning cube, and the
*   theme switch button is in the top right corner.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSidePanelOpen = false;

  toggleSidePanel() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
  }
}
