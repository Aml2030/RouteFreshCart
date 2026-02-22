import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private httpClient:HttpClient = inject(HttpClient);

  // This signal holds the IDs of products in the wishlist
  wishlistIds:WritableSignal<string[]>= signal<string[]>([]);


   //* 1. Get Logged User Wishlist

  getUserWishlist():Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/wishlist`,
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    );
  }

  //  * 2. Add product to wishlist

  addToWishlist(productId: string): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/wishlist`, { productId } ,
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    );
  }


  //  * 3. Remove product from wishlist

  removeFromWishlist(productId: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/wishlist/${productId}`,
      {
        headers:{
          token: localStorage.getItem("userToken")|| ''
        }
      }
    );
  }
}
