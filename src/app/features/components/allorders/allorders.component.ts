import { Component, inject, OnInit, WritableSignal ,signal } from '@angular/core';
import { OrderService } from './../../services/order/order.service';
import { AuthService } from './../../../core/sevices/auth/auth.service';
import { UserOrders } from '../../../shared/models/IUserOrders';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-allorders',
  imports: [DatePipe,RouterLink, TranslatePipe],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss',
})
export class AllordersComponent implements OnInit {
  private authService:AuthService=inject(AuthService);

  private orderService:OrderService=inject(OrderService);

  orderList:WritableSignal<UserOrders[]>=signal<UserOrders[]>([]);


  ngOnInit(): void {
    this.getUserOrders();
  }
  getUserOrders(){
    console.log(this.authService.userData.getValue());
    const user = this.authService.userData.getValue();
    const userId = user?.id;
    if (userId) {
        console.log("User ID:", userId);

        this.orderService.getUserOrders(userId).subscribe({
            next: (res:UserOrders[]) => {
                console.log("Orders:", res);
                this.orderList.set(res);
            },
            error: (err) => {
                console.error( err);
            }
        });
    } else {
        console.error("Can`t Find User ID)");
    }


  }

}
