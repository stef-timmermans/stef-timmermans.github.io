/*
* Folder: src/app/elements/theme-switch
* Component: theme-switch
*     The theme switcher is a button that toggles the theme
*   between light and dark mode. It utilizes the theme service
*   to change the theme.
*/

import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {
  constructor(public themeService: ThemeService) { }

  switchTheme(): void {
    this.themeService.toggleTheme();
  }

  getButtonIcon(): string {
    return this.themeService.getTheme() === 'dark' ? 'bi-sun-fill' : 'bi-moon-fill';
  }

  getButtonText(): string {
    return this.themeService.getTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
  }
}
