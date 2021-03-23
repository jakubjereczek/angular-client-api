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

  addNewProductPopupVisible = false;
  editProductPopupVisible = false;

  constructor(private httpService: HttpService) {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getProducts().subscribe((products) => {
      console.log("new Data");
      this.productsList = products.slice(); // Zmiana referencji - odswiezenie.
      console.log(products)
    })
  }

  deleteProduct(product: Product) {
    console.log(product)
    this.httpService.deleteProduct(product).subscribe(() => {
      this.getProducts(); // Odswiezenie listy
    })
  }

  selectActive(product: Product) {
    this.activeProduct = product;
  }

  changeVisible() {
    this.addNewProductPopupVisible = !this.addNewProductPopupVisible;
    this.getProducts();
  }

  changeVisibleEdit() {
    this.editProductPopupVisible = !this.editProductPopupVisible;
    this.getProducts();
  }



}
