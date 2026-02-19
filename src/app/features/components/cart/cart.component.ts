import { HttpClient } from '@angular/common/http';
import { Component, inject, WritableSignal , signal, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import { CartData, CartResponse } from '../../../shared/models/ICart';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from "@angular/router";

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  imports: [RouterLink , TranslatePipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

  cartData:WritableSignal<CartData>=signal<CartData>({} as CartData);
  cartService:CartService=inject(CartService);

  ngOnInit(): void {
    this.getLoggedUserCart();
  }


  getLoggedUserCart(){
    this.cartService.getLoggedUserCart().subscribe(res=>{
      this.cartData.set(res.data);
    })
  }

  updateProductCartCount(productId:string, count:number){
     this.cartService.updateProductCartCount(productId,count.toString()).subscribe({
      next : res=>{
        this.cartData.set(res.data);

        this.cartService.NoOfCartItems.next(res.numOfCartItems);
      }
    })
  }

  removeSpecificProductFromCart(productId:string){
     this.cartService.removeSpecificProductFromCart(productId).subscribe({
      next : res=>{
        this.cartData.set(res.data);

        this.cartService.NoOfCartItems.next(res.numOfCartItems);
      }
    })
  }

  clearCart(){
     this.cartService.clearCart().subscribe({
      next : res=>{
        this.getLoggedUserCart();
        // this.cartData.set(res.data); //because it is not the same response

        this.cartService.NoOfCartItems.next(0);
      }
    })
  }



}
