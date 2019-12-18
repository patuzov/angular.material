import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class ThemeManagerService {

  currentTheme: string;

  constructor(private overlayContainer: OverlayContainer) { }

  setTheme(theme: string): void {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    overlayContainerElement.classList.remove(this.currentTheme)

    if(this.currentTheme !== 'default-theme') {
      overlayContainerElement.classList.add(theme);
    }

    this.currentTheme = theme;
  }
}
