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

  getButtonText(): string {
    return this.themeService.getTheme() === 'dark' ? 'Light Mode' : 'Dark Mode';
  }
}
