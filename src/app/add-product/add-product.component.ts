import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  nameProduct: string = "";
  inStock: boolean = true;

  @Output() changeVisibility = new EventEmitter();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  changeVisible() {
    this.changeVisibility.emit();
  }

  addProduct() {
    const product: Product = {
      Name: this.nameProduct,
      InStock: this.inStock,
    }
    this.httpService.addProduct(product).subscribe((product) => {
      console.log(product)
      this.changeVisibility.emit();

    });

  }

}
