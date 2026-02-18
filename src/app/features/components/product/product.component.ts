import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../shared/models/Iproducts';
import { ProductcardComponent } from "../../../shared/components/productcard/productcard.component";

@Component({
  selector: 'app-product',
  imports: [  ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit{
  productService:ProductService=inject(ProductService);
  productList:WritableSignal<Product[]>=signal<Product[]>([]);


  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe({

      next:(res) => {
        this.productList.set(res.data)
      }
    })
  }
}
