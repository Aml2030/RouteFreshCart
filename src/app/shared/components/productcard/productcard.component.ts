import { Component, inject, input } from '@angular/core';
import { Product } from '../../../shared/models/Iproducts';
import { RouterLink } from "@angular/router";
import { CartService } from './../../../features/services/cart/cart.service';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-productcard',
  imports: [RouterLink],
templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss',
})
export class ProductcardComponent {
  product=input<Product>({} as Product)

  cartService:CartService=inject(CartService);
toastr = inject(ToastrService);
  addProductToCart(productId:string){
    this.cartService.addProductToCart(productId).subscribe((res)=>{
      console.log(res.data)
      // alert(res.message)
      this.toastr.success(res.message,
        "",
        {
          timeOut:2000,
          progressBar:true,
          positionClass:"toast-bottom-right"
        }
      )

      this.cartService.NoOfCartItems.next(res.numOfCartItems)
    })
  }
}
