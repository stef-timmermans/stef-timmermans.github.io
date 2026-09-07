import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeKey = 'theme';
  private theme: Theme = 'light';

  constructor() {
    try {
      this.theme = localStorage.getItem(this.themeKey) === 'dark' ? 'dark' : 'light';
    } catch {
      // Keep the default when browser storage is unavailable.
    }
    this.applyTheme();
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    this.applyTheme();
    try {
      localStorage.setItem(this.themeKey, theme);
    } catch {
      // Switching still works for this visit without persistent storage.
    }
  }

  toggleTheme(): void {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  getTheme(): Theme {
    return this.theme;
  }

  private applyTheme(): void {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(this.theme);
  }
}
