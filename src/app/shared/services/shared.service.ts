import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/products';

@Injectable({
  providedIn: 'root'
})
export class SharedProductsService {
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  public filteredProducts$ = this.filteredProductsSubject.asObservable();

  updateFilteredProducts(products: Product[]) {
    this.filteredProductsSubject.next(products);
  }
}
