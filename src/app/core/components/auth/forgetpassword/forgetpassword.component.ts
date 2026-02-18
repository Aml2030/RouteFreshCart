import { Component ,signal , WritableSignal , inject } from '@angular/core';
import { forgetPassword } from './../../../../shared/models/data';
import {FormControl, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../sevices/auth/auth.service';
import { ResetcodeComponent } from '../resetcode/resetcode.component';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule, ResetcodeComponent],
templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss',
})
export class ForgetpasswordComponent {

  forgetPasswordForm:FormGroup = new FormGroup({
  email : new FormControl(null, [Validators.required , Validators.email]),

});

    private authService: AuthService = inject(AuthService);
  isLoading:WritableSignal<boolean>=signal<boolean>(false);
    errorMsg:WritableSignal<string>=signal<string>("");
    forgetPasswordFlag:boolean  = true;
    resetCodeFlag:boolean  = false;

submitForgotPasswordForm(){

      if(this.forgetPasswordForm.valid){
      this.isLoading.set(true);
      this.authService.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next: res=>{
          this.isLoading.set(false);
          this.forgetPasswordFlag = false;
          this.resetCodeFlag = true;

        },
        error:err=>{
          this.isLoading.set(false);
          this.errorMsg.set(err.error.message);

        }
      });
    }
    console.log(this.forgetPasswordForm.value );

}
}
