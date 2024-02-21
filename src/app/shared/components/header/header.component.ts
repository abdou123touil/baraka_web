import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from 'src/app/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('searchIconState', [
      state('open', style({ transform: 'rotate(45deg)' })),
      state('closed', style({ transform: 'rotate(0deg)' })),
      transition('closed => open', animate('0.3s ease-in-out')),
      transition('open => closed', animate('0.3s ease-in-out')),
    ]),
    trigger('searchFieldState', [
      state('open', style({ width: '240px' })),
      state('closed', style({ width: '0' })),
      transition('closed => open', animate('0.3s ease-in-out')),
      transition('open => closed', animate('0.3s ease-in-out')),
    ]),
  ],

})
export class HeaderComponent {
  searchTerm: string = '';
  displaySection: boolean = false;
  searchResults: any[] = [];
  searchIconState: 'open' | 'closed' = 'closed';
  searchFieldState: 'open' | 'closed' = 'closed';
  isDropdownOpen: boolean = false;
  showResults: boolean = false;
  @Input() isVisible: boolean = true;
  constructor(private productsService: ProductsService, private router: Router,public authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (this.router.url === '/home') {
        this.displaySection = true;
      } else {
        this.displaySection = false;
      }
    });
  }
  toggleSearchField() {
    this.searchIconState = this.searchIconState === 'closed' ? 'open' : 'closed';

    // Toggle the search field state with a slight delay to allow the icon animation to start first
    setTimeout(() => {
      this.searchFieldState = this.searchFieldState === 'closed' ? 'open' : 'closed';
    }, 100);
  }

  searchProducts() {
    if (this.searchTerm.trim() != '') {
      this.productsService.getAllproducts().subscribe((products: any[]) => {
        this.searchResults = products.filter(product =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.showResults = true;
      });
    } else {
      this.showResults = false;
      this.searchResults = []; // Clear the search results when the input is empty
    }
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(): void {
    this.authService.logout();
    // Additional logic if needed, such as navigating to a different page
  }
  navigateToProductDetail(productId: number) {
    // Navigate to the product details page with the productId as a parameter
    this.router.navigate(['/details', productId]);
  }

  refreshPage() {
    window.location.reload();
  }
}
