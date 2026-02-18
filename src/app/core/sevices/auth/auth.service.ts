import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { forgetPassword, resetCodeData, signUpData } from '../../../shared/models/data';
import { logInData } from '../../../shared/models/data';
import { environment } from '../../../../environment/environment';
import { jwtDecode, JwtPayload } from "../../../../../node_modules/jwt-decode"
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { resetNewPassword } from './../../../shared/models/data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient:HttpClient , @Inject(PLATFORM_ID) private ID:Object){
      if(isPlatformBrowser(ID)){
        if(localStorage.getItem("userToken")!=null){
          this.decodeUserData();
        }
    }
  }
  signUp(data:signUpData):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/auth/signup`,data)
  }
  signIn(data:logInData):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/auth/signin`,data)
  }

   forgetPassword(data:forgetPassword):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/auth/forgotPasswords`,data)
  }
   verifyResetCode(data:resetCodeData):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/auth/verifyResetCode`,data)
  }
   resetNewPassword(data:resetNewPassword):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/auth/resetPassword`,data)
  }

  userData:BehaviorSubject<null|JwtPayload>=new BehaviorSubject<null|JwtPayload>(null); //it starts after refreshing with null! id browser

  decodeUserData(){
    const token= localStorage.getItem("userToken")!;
    const decoded= jwtDecode(token);
    this.userData.next(decoded);
  }

  router:Router=inject(Router);
  logOut(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this.router.navigate(['login'])
  }

}


