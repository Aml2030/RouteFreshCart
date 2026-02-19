import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartResponse } from '../../../shared/models/ICart';
import { CheckPlateFormService } from './../../../shared/sevices/checkPlateForm/check-plate-form.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private httpClient:HttpClient = inject(HttpClient);
  checkPlateFormService:CheckPlateFormService =inject(CheckPlateFormService);

  NoOfCartItems:BehaviorSubject<number>= new BehaviorSubject<number>(0);

  constructor(){
    if(this.checkPlateFormService.checkIsPlateFormBrowser()){

      this.getLoggedUserCart().subscribe({
        next: res =>{
          this.NoOfCartItems.next(res.numOfCartItems);


        }
      })
    }
  }

  addProductToCart(productId:string):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/cart`,
      {
        productId:productId
      },
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    )
  }

  getLoggedUserCart():Observable<any>{
  return this.httpClient.get(`${environment.baseUrl}/cart`,
    {
    headers:{
      token:localStorage.getItem("userToken") || ' ',
    }
    })

  }

  updateProductCartCount(productId:string, count:string):Observable<CartResponse>{
  return this.httpClient.put<CartResponse>(`${environment.baseUrl}/cart/${productId}`,
    {
      count
    },
    {
    headers:{
      token:localStorage.getItem("userToken") || ' ',
    }
    })

  }

  removeSpecificProductFromCart(productId:string):Observable<CartResponse>{
    return this.httpClient.delete<CartResponse>(`${environment.baseUrl}/cart/${productId}`,
      {
      headers:{
        token:localStorage.getItem("userToken") || ' ',
      }
      }
    )

  }

  clearCart():Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}/cart`,
      {
      headers:{
        token:localStorage.getItem("userToken") || ' ',
      }
      }
    )

  }



}
