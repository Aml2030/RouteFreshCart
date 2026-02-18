import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { AllProductsresponse } from '../../../shared/models/Iproducts';
import { Product } from './../../../shared/models/Iproducts';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient:HttpClient){}

  getAllProducts():Observable<AllProductsresponse>{
    return this.httpClient.get<AllProductsresponse>(`${environment.baseUrl}/products`)
  }
  getSpecificProduct(productId:String):Observable<{data:Product}>{
    return this.httpClient.get<{data:Product}>(`${environment.baseUrl}/products/${productId}`)
  }

}
