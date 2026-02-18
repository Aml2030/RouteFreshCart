import { Component, inject, signal, WritableSignal } from '@angular/core';
import {FormControl, FormGroup , ReactiveFormsModule, Validators , AbstractControl} from '@angular/forms';
import { log } from 'node:console';
import { AuthService } from '../../../sevices/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  registerForm:FormGroup = new FormGroup({
    name : new FormControl(null ,[Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
    email : new FormControl(null, [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9@]{4,20}$/)]),
    rePassword : new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z0-9@]{4,20}$/)]),
    phone : new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),
  },{
    validators: this.passwordMatch })

  passwordMatch(x:AbstractControl){
    if (!x.get("rePassword")) {
    return null;
  }
    if(x.get("rePassword")?.value === x.get("password")?.value){
      return null;
    }
    else{
      x.get("rePassword")?.setErrors({mismatch:true})
      return {mismatch:true}
    }
  }

  private authService: AuthService = inject(AuthService);
  errorMsg:WritableSignal<string>=signal<string>("");

  isLoading:boolean=false;

  router:Router=inject(Router);

  submitRegisterForm(){
    if(this.registerForm.valid){
      this.isLoading=true;
      this.authService.signUp(this.registerForm.value).subscribe({
        next: res=>{
          this.isLoading=false;
          localStorage.setItem("useToken",res.token);
          this.router.navigate(["home"])
        },
        error:err=>{
          this.isLoading=false;
          this.errorMsg.set(err.error.message);
          console.log(err)

        }
      });
    }
    console.log(this.registerForm );
  }

}
