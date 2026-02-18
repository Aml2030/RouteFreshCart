import { Routes } from '@angular/router';
import { HomeComponent } from '../app/features/components/home/home.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ProductComponent } from './features/components/product/product.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { NotfoundComponent } from './features/components/notfound/notfound.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { RegisterComponent } from './core/components/auth/register/register.component';
import { authGuard } from './core/guards/auth/auth-guard';
import { ForgetpasswordComponent } from './core/components/auth/forgetpassword/forgetpassword.component';
import { ProductdetailsComponent } from './features/components/productdetails/productdetails.component';
import { ShippingAddressComponent } from './features/components/shipping-address/shipping-address.component';
import { AllordersComponent } from './features/components/allorders/allorders.component';

export const routes: Routes = [
{path:'home', component:HomeComponent , title:'home'},
{path:"cart" ,canActivate:[authGuard], component:CartComponent , title:'cart'},
{path:"product" , component:ProductComponent , title:'product'},
{path:"productdetails/:id" , component:ProductdetailsComponent , title:'productdetails'},
{path:"categories" , component:CategoriesComponent , title:'categories'},
{path:"brands" , component:BrandsComponent , title:'brands'},
{path:"login" , component:LoginComponent , title:'login'},
{path:"forgetpassword" , component:ForgetpasswordComponent , title:'forgetpassword'},
{path:"register" , component:RegisterComponent , title:'register'},
{path:"shippingaddress/:id" , component:ShippingAddressComponent , title:'shippingaddress'},
{path:"allorders" , component:AllordersComponent , title:'allorders'},
{path:"" , redirectTo:'home' , pathMatch:'full'},
{path:"**" , component:NotfoundComponent , title:'notfound'},

];
