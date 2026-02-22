import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../shared/models/Iproducts';
import { ProductcardComponent } from "../../../shared/components/productcard/productcard.component";
import { WishlistService } from '../../services/wishlist/wishlist.service';

@Component({
  selector: 'app-product',
  imports: [  ProductcardComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit{
  productService:ProductService=inject(ProductService);
  productList:WritableSignal<Product[]>=signal<Product[]>([]);

wishlistService = inject(WishlistService);
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
