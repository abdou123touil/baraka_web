import { Component, ElementRef, OnInit, ViewChildren, QueryList, Renderer2 } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: string[] = [];
  productsByCategory: { [category: string]: any[] } = {};
  darkMode: boolean = false;
  searchTerm: string = '';
  showResults: boolean = false;
  searchResults: any[] = [];
  featuredProducts: any[] = [];
  selectedCategory: string | null = null;
  filteredProductsByCategory: { [category: string]: any[] } = {};
  topCategories: string[] = [];
  customerReviews: any[] = [];
  currentSlide = 0;


  constructor(
    private productsService: ProductsService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadCategoryProducts();
    this.loadFeaturedProducts();
    this.loadCustomerReviews();

    setTimeout(() => {
      this.scrollToStart();
    }, 100);
  }
  changeSlide(slideIndex: number) {
    this.currentSlide = slideIndex;
  }
  scrollToStart() {
    const containers = document.querySelectorAll('.product-list') as NodeListOf<HTMLElement>;
    containers.forEach(container => {
      container.style.transition = 'none';
      container.style.transform = 'translateX(0)';
    });
  }
  loadCategories() {
    this.productsService.getAllcategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  loadCategoryProducts() {
    this.productsService.getAllproducts().subscribe((products: any[]) => {
      this.categories.forEach(category => {
        this.productsByCategory[category] = products.filter(product => product.category === category);

        // Create a filtered version of productsByCategory for each category
        this.filteredProductsByCategory[category] = [...this.productsByCategory[category]];
      });

      this.loadFeaturedProducts(); // Load featured products
    });
  }

  scrollCarousel(category: string, direction: 'prev' | 'next') {
    const container = document.querySelector(`#${category} .product-list`) as HTMLElement;
    if (container) {
      const visibleProducts = container.querySelectorAll('.product-item');
      const containerWidth = container.clientWidth;
      const productWidth = visibleProducts[0].clientWidth + 20; // Added 20 for the margin
      const visibleProductsWidth = productWidth * visibleProducts.length;
      const maxScroll = container.scrollWidth - containerWidth;
      const currentPosition = container.scrollLeft;
      let newPosition;

      if (direction === 'prev') {
        newPosition = Math.max(currentPosition - visibleProductsWidth, 0);
      } else {
        newPosition = Math.min(currentPosition + visibleProductsWidth, maxScroll);
      }

      container.style.transition = 'transform 0.5s ease-in-out';
      container.style.transform = `translateX(-${newPosition}px)`; // Negative sign for the direction
    }
  }

  getFormattedCategoryId(category: string): string {
    // Replace special characters and spaces with hyphens
    return category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const categoryElements = document.querySelectorAll('.category');
    categoryElements.forEach(element => {
      if (this.darkMode) {
        this.renderer.addClass(element, 'dark-mode');
      } else {
        this.renderer.removeClass(element, 'dark-mode');
      }
    });
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
  navigateToProductDetail(productId: string) {
    this.router.navigate(['/details', productId]); // Navigate to the product detail page
  }

  loadFeaturedProducts() {
    this.productsService.getFeaturedProducts().subscribe((products: any[]) => {
      this.featuredProducts = products;
    });
  }
  loadCustomerReviews() {
    this.productsService.getCustomerReviews().subscribe(reviews => {
      this.customerReviews = reviews;
    });
  }

}
