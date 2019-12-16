import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';

  isDarkTheme = false;

  constructor(private overlayContainer: OverlayContainer){

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
