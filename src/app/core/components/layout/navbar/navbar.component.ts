import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite/flowbite.service' ;
import { initFlowbite } from 'flowbite';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { AuthService } from '../../../sevices/auth/auth.service';
import { CartService } from './../../../../features/services/cart/cart.service';
import { TranslatePipe } from '@ngx-translate/core';
import { MyTranslateService } from '../../../services/myTranslate/my-translate.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLinkWithHref , TranslatePipe],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements  OnInit  {

  isLogin:WritableSignal<boolean>=signal<boolean>(false);

  constructor(private flowbiteService: FlowbiteService, public authService:AuthService , public cartService:CartService , ) {}
  cartItems:WritableSignal<number>=signal<number>(0);

  myTranslateService:MyTranslateService=inject(MyTranslateService);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });

    this.authService.userData.subscribe(data=>{
      if(data!=null)
        this.isLogin.set(true);
      else
        this.isLogin.set(false);

    })

    this.cartService.NoOfCartItems.subscribe({
      next:res=>{
        this.cartItems.set(res)
      }
    })
  }

  



}
