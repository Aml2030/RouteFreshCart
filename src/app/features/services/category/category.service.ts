import { environment } from '../../../../environment/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class CategoryService {
private httpClient:HttpClient=inject(HttpClient)

  getAllCategories():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}/categories`)
  }
}
