import { Component, WritableSignal, signal , inject } from '@angular/core';
import {FormControl, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../sevices/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

    logInForm:FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-9@]{4,20}$/)]),
});



  private authService: AuthService = inject(AuthService);
  errorMsg:WritableSignal<string>=signal<string>("");

  isLoading:WritableSignal<boolean>=signal<boolean>(false);

  router:Router=inject(Router);

  submitlogInForm(){
    if(this.logInForm.valid){
      this.isLoading.set(true);
      this.authService.signIn(this.logInForm.value).subscribe({
        next: res=>{
          this.isLoading.set(false);
          localStorage.setItem("userToken", res.token);
          this.authService.decodeUserData();
          this.router.navigate(["home"])
        },
        error:err=>{
          this.isLoading.set(false);
          this.errorMsg.set(err.error.message);
          console.log(err)

        }
      });
    }
    console.log(this.logInForm );
  }

}
