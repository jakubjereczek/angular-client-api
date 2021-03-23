import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  URL_ADDRESS = 'https://localhost:44309/api/products/';

  constructor(private http: HttpClient) {

  }

  // GET
  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.URL_ADDRESS);

  }

  // GET/id
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL_ADDRESS}/+${id}`);
  }

  // POST
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL_ADDRESS, product);
  }

  // PUT
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.URL_ADDRESS, product)
  }

  // DELETE
  deleteProduct(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.URL_ADDRESS}/+${product.Id}`);
  }


}