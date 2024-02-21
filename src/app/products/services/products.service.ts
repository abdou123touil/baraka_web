import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Import 'of' function from RxJS

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllproducts(): Observable<any[]> {
    return this.http.get<any[]>('http://fakestoreapi.com/products/');
  }

  getAllcategories(): Observable<string[]> {
    return this.http.get<string[]>('http://fakestoreapi.com/products/categories');
  }

  getproductsbycategories(keyword: string): Observable<any[]> {
    return this.http.get<any[]>('http://fakestoreapi.com/products/categories' + keyword);
  }

  getproductsbyid(id: any): Observable<any> {
    return this.http.get<any>('http://fakestoreapi.com/products' + id);
  }

  getFeaturedProducts(): Observable<any[]> {
    return this.http.get<any[]>('http://fakestoreapi.com/products?limit=5');
  }

  getCustomerReviews(): Observable<any[]> {
    return this.http.get<any[]>('http://fakestoreapi.com/reviews');
  }
}
