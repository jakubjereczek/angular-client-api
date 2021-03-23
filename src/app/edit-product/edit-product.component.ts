import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @Input()
  activeProduct: any;

  constructor(private httpService: HttpService) {
  }

  @Output() changeVisibilityEdit = new EventEmitter();

  ngOnInit(): void {
  }

  changeVisible() {
    this.changeVisibilityEdit.emit();
  }

  editProduct(name: string, inStock: any) {

    const product: Product = {
      id: this.activeProduct.id,
      Name: name,
      InStock: inStock.checked
    }
    this.httpService.updateProduct(product).subscribe((product) => {
      console.log("Produkt zaaktualizowany")
      this.changeVisibilityEdit.emit();

    })

  }


}
