import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';
import { timer } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartproduct: any[] = [];
  filteredProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'all';

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllproducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
        this.filterProducts(); // Initial filtering
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllcategories().subscribe(
      (res: any) => {
        this.categories = res;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert(error.message);
      }
    );
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(
      (product) =>
        (this.selectedCategory === 'all' || product.category === this.selectedCategory) &&
        (this.searchQuery === '' || product.name.toLowerCase().includes(this.searchQuery))
    );
  }

  filterByCategory(event: any) {
    this.selectedCategory = event.target.value;
    this.searchQuery = ''; // Clear the search query

    // Show the spinner for 1 second
    this.loading = true;
    timer(500).subscribe(() => {
      this.filterProducts(); // Apply filters
      this.loading = false; // Hide the spinner
    });
  }

  onSearch(query: string) {
    this.searchQuery = query.trim().toLowerCase();
    this.selectedCategory = 'all'; // Reset selected category to 'all'

    // Show the spinner for 1 second
    this.loading = true;
    timer(500).subscribe(() => {
      this.filterProducts(); // Apply filters
      this.loading = false; // Hide the spinner
    });
  }
  addtocart(event: any) {
    if ("cart" in localStorage) {
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!);
      const exist = this.cartproduct.find((item) => item.item.id === event.item.id);
      if (exist) {
        alert("This product is already in the cart.");
      } else {
        this.cartproduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartproduct));
      }
    } else {
      this.cartproduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartproduct));
    }
  }
}

