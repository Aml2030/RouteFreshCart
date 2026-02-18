import { CanActivateFn, RouteReuseStrategy } from '@angular/router';
import { AuthService } from '../../sevices/auth/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router:Router=inject(Router);

  const authService:AuthService=inject(AuthService);
  if(authService.userData.getValue()!=null){
    return true ;
  }
  return  router.createUrlTree(['login']);

};

