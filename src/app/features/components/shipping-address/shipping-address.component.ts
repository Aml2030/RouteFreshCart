import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { OrderService } from '../../services/order/order.service';
import { ActivatedRoute, Router   } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';




@Component({
  selector: 'app-shipping-address',
  standalone:true,
  imports: [ReactiveFormsModule  ],
templateUrl: './shipping-address.component.html',
  styleUrl: './shipping-address.component.scss',
})
export class ShippingAddressComponent {

  shippingAddressForm:FormGroup= new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  orderService:OrderService=inject(OrderService);
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  router:Router=inject(Router);

  cartService:CartService=inject(CartService);

  submitShippingAddressFormCash(){
    if(this.shippingAddressForm.valid){
      this.activatedRoute.paramMap.subscribe({
        next : data=>{
          this.orderService.createCashOrder(data.get('id')!,this.shippingAddressForm.value).subscribe({
            next: res =>{
              this.router.navigate(['allorders'])

              this.cartService.NoOfCartItems.next(0);
            }
          })
        }
      })
    }
  }

  submitShippingAddressFormOnline(){
    if(this.shippingAddressForm.valid){
      this.activatedRoute.paramMap.subscribe({
        next : data=>{
          this.orderService.checkOut(data.get('id')!,this.shippingAddressForm.value).subscribe({
            next: res =>{
              window.open(res.session.url,'_self')

              this.cartService.NoOfCartItems.next(0);
            }
          })
        }
      })
    }
  }
}
