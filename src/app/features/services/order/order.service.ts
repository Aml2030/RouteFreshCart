import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environment/environment';
import {shippingAddressData} from '../../../../app/shared/models/Ishipping'
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private httpClient:HttpClient=inject(HttpClient);

  createCashOrder(cartId:string,data:shippingAddressData):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/orders/${cartId}`,
      {
        shippingAddress: data
      },
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    )
  }
  checkOut(cartId:string,data:shippingAddressData):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/orders//checkout-session/${cartId}?url=${environment.domain}`,
      {
        shippingAddress: data
      },
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    )
  }
}
