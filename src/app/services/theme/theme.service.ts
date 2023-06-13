/*
* Folder: src/app/services/theme
* Component: theme
*     The theme service is used to manage the theme of the
*   website. It is used to set the theme, toggle the theme,
*   and get the current theme. The theme is stored in local
*   storage so that it persists between page loads.
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  constructor() { 
    this.setTheme(this.getTheme());
  }

  setTheme(theme: string): void {
    // first, remove the old theme class if any
    const currentTheme = this.getTheme();
    if (currentTheme) {
        document.body.classList.remove(currentTheme);
    }
    
    // add the new theme class
    document.body.classList.add(theme);

    // update theme in local storage
    try {
        localStorage.setItem(this.THEME_KEY, theme);
    } catch (e) {
        console.error('Unable to save theme in Local Storage: ', e);
    }
  }

  toggleTheme(): void {
    if (this.getTheme() === this.DARK_THEME) {
      this.setTheme(this.LIGHT_THEME);
    } else {
      this.setTheme(this.DARK_THEME);
    }
  }

  getTheme(): string {
    let theme = this.LIGHT_THEME;
    try {
        theme = localStorage.getItem(this.THEME_KEY) || this.LIGHT_THEME;
    } catch (e) {
        console.error('Unable to get theme from Local Storage: ', e);
    }
    return theme;
  }
}
