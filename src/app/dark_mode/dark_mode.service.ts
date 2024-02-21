import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class dark_modeService {
  private isDarkMode: boolean = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  isDarkModeEnabled(): boolean {
    return this.isDarkMode;
  }
}
