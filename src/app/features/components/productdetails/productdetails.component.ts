import { Component, WritableSignal, signal , OnInit , inject } from '@angular/core';
import { Product } from '../../../shared/models/Iproducts';
import { ProductService } from '../../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart/cart.service';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-productdetails',
  imports: [CurrencyPipe , TranslatePipe],
templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
})
export class ProductdetailsComponent   implements OnInit{
  product:WritableSignal<Product>=signal<Product>({} as Product)


  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{

      this.getSpecificProduct(data['id']);
    })

  }
  getSpecificProduct(id:string){
    this.productService.getSpecificProduct(id).subscribe({

      next:(res) => {
        this.product.set(res.data)
      }
    })
  }




  cartService:CartService=inject(CartService);
  toaster=inject(ToastrService);
  addProductToCart(productId:string){
    this.cartService.addProductToCart(productId).subscribe((res)=>{
      console.log(res.data)
      // alert(res.message)
      this.toaster.success(res.message,
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
