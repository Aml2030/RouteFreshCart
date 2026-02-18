import { Component ,signal , WritableSignal , inject } from '@angular/core';
import {FormControl, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../sevices/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetnewpassword',
  imports: [ReactiveFormsModule ],
  templateUrl: './resetnewpassword.component.html',
  styleUrl: './resetnewpassword.component.scss',
})
export class ResetnewpasswordComponent {

   resetnewPasswrdForm:FormGroup = new FormGroup({
      email : new FormControl(null, [Validators.required , Validators.email]),
      newPassword : new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-z0-9@]{4,20}$/)]),

    });

    private authService: AuthService = inject(AuthService);
    isLoading:WritableSignal<boolean>=signal<boolean>(false);
    errorMsg:WritableSignal<string>=signal<string>("");

    router:Router=inject(Router);


    submitResetNewPasswrdForm(){

          if(this.resetnewPasswrdForm.valid){
          this.isLoading.set(true);
          this.authService.resetNewPassword(this.resetnewPasswrdForm.value).subscribe({
            next: res=>{
              console.log(res)
              this.isLoading.set(false);
              localStorage.setItem("userToken",res.token);
              this.authService.decodeUserData();
              this.router.navigate(['home']);
            },
            error:err=>{
              this.isLoading.set(false);
              this.errorMsg.set(err.error.message);

            }
          });
        }
        console.log(this.resetnewPasswrdForm.value );

    }

}
