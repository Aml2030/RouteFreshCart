import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { HomesliderComponent } from './homeslider/homeslider.component';
import { CategorysliderComponent } from '../../../shared/components/categoryslider/categoryslider.component';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../../shared/models/Iproducts';
import { ProductcardComponent } from "../../../shared/components/productcard/productcard.component";
import { SearchproductPipe } from '../../../shared/pipes/searchproduct/searchproduct-pipe';
import { FormsModule } from '@angular/forms';

import { TranslatePipe } from '@ngx-translate/core';
import { WishlistService } from '../../services/wishlist/wishlist.service';
import { CheckPlateFormService } from '../../../shared/sevices/checkPlateForm/check-plate-form.service';


@Component({
  selector: 'app-home',
  imports: [HomesliderComponent, CategorysliderComponent, ProductcardComponent , SearchproductPipe,FormsModule, TranslatePipe],

templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  productService:ProductService=inject(ProductService);
  productList:WritableSignal<Product[]>=signal<Product[]>([]);

  wishlistService:WishlistService=inject(WishlistService);
  checkPlateFormService:CheckPlateFormService=inject(CheckPlateFormService);
  wishlistIds:WritableSignal<Set<string>>=signal<Set<string>>(new Set<string>())

  userSearch:string="";

  ngOnInit(): void {
    this.getAllProducts();
    if(this.checkPlateFormService.checkIsPlateFormBrowser()){
      this.getUserWishlist();
    };

  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe({

      next:(res) => {
        this.productList.set(res.data)
        console.log(res)
      }
    })
  }

  getUserWishlist(){
    this.wishlistService.getUserWishlist().subscribe((res)=>{
      console.log(res);
      const ids= res.data.map((p:any)=>{
        return p.id;
      })
      const mySet=new Set<string>(ids);
      this.wishlistIds.set(mySet);

      console.log(ids)
      console.log(mySet)
    })
  }
  inWishlist(productId:string):boolean{
    return this.wishlistIds().has(productId);
  }

  toggleWishlist(pid: string) {
  if (this.inInWishlist(pid)) {
    this.removeFromWish(pid);
  } else {
    this.addToWish(pid);
  }
}

addToWish(pid: string) {
  this.wishlistService.addToWishlist(pid).subscribe((res) => {
    console.log(res);
    this.wishlistIds.set(new Set<string>(res.data))
  });
}

removeFromWish(pid: string) {
  this.wishlistService.removeFromWishlist(pid).subscribe((res) => {
    console.log(res);
    this.wishlistIds.set(new Set<string>(res.data))
  });
}

inInWishlist(productId: string): boolean {
  return this.wishlistIds().has(productId);
}
}
