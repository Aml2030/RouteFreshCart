import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { CategorysliderComponent } from '../../../shared/components/categoryslider/categoryslider.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../shared/models/Iproducts';
import { ProductcardComponent } from "../../../shared/components/productcard/productcard.component";
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { FormsModule } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  imports: [HomesliderComponent, CategorysliderComponent, ProductcardComponent , SearchproductPipe,FormsModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  productService:ProductService=inject(ProductService);
  productList:WritableSignal<Product[]>=signal<Product[]>([]);

  userSearch:string="";

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
