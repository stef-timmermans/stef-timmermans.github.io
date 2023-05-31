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
    localStorage.setItem(this.THEME_KEY, theme);    
  }

  toggleTheme(): void {
    if (this.getTheme() === this.DARK_THEME) {
      this.setTheme(this.LIGHT_THEME);
    } else {
      this.setTheme(this.DARK_THEME);
    }
  }

  getTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || this.LIGHT_THEME;
  }
}
