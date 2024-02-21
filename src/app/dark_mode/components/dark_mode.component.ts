import { Component } from '@angular/core';
import { dark_modeService } from '../dark_mode.service';

@Component({
  selector: 'app-dark_mode',
  templateUrl: './dark_mode.component.html',
  styleUrls: ['./dark_mode.component.scss']
})
export class dark_modeComponent {

  constructor(private dark_modeService: dark_modeService) {

  }

  toggleDarkMode() {
    this.dark_modeService.toggleDarkMode();
  }

  isDarkModeEnabled(): boolean {
    return this.dark_modeService.isDarkModeEnabled();
  }
}
