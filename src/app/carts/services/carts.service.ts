import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  creatnewcart(model:any){
      return this.http.post('https://fakestoreapi.com/carts', model);
  }
}
