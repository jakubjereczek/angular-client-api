import { Component } from '@angular/core';
import { Product } from './models';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productsList = [];
  activeProduct = null;

  constructor(private httpService: HttpService) {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getProducts().subscribe((products) => {
      this.productsList = products;
      console.log(products)
    })
  }

  selectActive(product: Product) {
    this.activeProduct = product;
  }


}
