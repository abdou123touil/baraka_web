import { Component, OnInit } from '@angular/core';
import { dark_modeService } from '../app/dark_mode/dark_mode.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  headerVisible: boolean = true;
  footerVisible: boolean = true;
  
  constructor(private router: Router,private dark_modeService: dark_modeService) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        this.headerVisible = !currentUrl.includes('/login');
        this.footerVisible = this.headerVisible;
      }
    });
  }
  title = 'baraka_web';


  isDarkModeEnabled(): boolean {
    return this.dark_modeService.isDarkModeEnabled();
  }

  toggleDarkMode() {
    this.dark_modeService.toggleDarkMode();
  }

}
