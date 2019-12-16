import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';

  isDarkTheme = false;

  constructor(private overlayContainer: OverlayContainer,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.matIconRegistry.addSvgIcon(
        'app_insights',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/appinsights.svg")
      );
      this.matIconRegistry.addSvgIcon(
        'appservices',
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/img/appservices.svg")

      )
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if(this.isDarkTheme){
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    } else {      
      this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme');
    }
  }
}
