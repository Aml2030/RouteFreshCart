import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/layout/navbar/navbar.component';
import { FooterComponent } from './core/components/layout/footer/footer.component';
import { HomeComponent } from './features/components/home/home.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ProductComponent } from './features/components/product/product.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { NotfoundComponent } from './features/components/notfound/notfound.component';
// import { spinnerInterceptor } from './core/interceptores/spinner/spinner-interceptor';
 import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent  ,CommonModule ,NgxSpinnerModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // constructor(private spinner: NgxSpinnerService) {}

  // ngOnInit() {
  //   /** spinner starts on init */
  //   this.spinner.show();

  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  //   }, 5000);
  // }
}
