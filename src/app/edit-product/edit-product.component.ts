import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  nameProduct: string = "";
  inStock: boolean = true;

  constructor() { }

  @Output() changeVisibilityEdit = new EventEmitter();

  ngOnInit(): void {
  }

  changeVisible() {
    this.changeVisibilityEdit.emit();
  }

  editProduct() {

  }


}
