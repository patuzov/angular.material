import { Component } from '@angular/core';
import { ThemeManagerService } from './theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  availableThemes = [
    'default-theme',
    'unicorn-dark-theme',
    'demo1-theme',
    'demo2-theme'
  ]

  currentTheme = 'default-theme';

  constructor(private themeManager: ThemeManagerService) {
  }

  changeTheme(theme: string): void {
    this.themeManager.setTheme(theme);
  }
}
