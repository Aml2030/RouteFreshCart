import { Component ,signal , WritableSignal , inject } from '@angular/core';
import {FormControl, FormGroup , ReactiveFormsModule, Validators } from '@angular/forms';

import { AuthService } from '../../../sevices/auth/auth.service';
import { ResetnewpasswordComponent } from '../resetnewpassword/resetnewpassword.component';
@Component({
  selector: 'app-resetcode',
  imports: [ReactiveFormsModule ,ResetnewpasswordComponent],
  templateUrl: './resetcode.component.html',
  styleUrl: './resetcode.component.scss',
})
export class ResetcodeComponent {

    resetCodeForm:FormGroup = new FormGroup({
    resetCode : new FormControl(null, [Validators.required , Validators.pattern(/^[0-9]{4,6}$/)]),

  });

      private authService: AuthService = inject(AuthService);
    isLoading:WritableSignal<boolean>=signal<boolean>(false);
      errorMsg:WritableSignal<string>=signal<string>("");
      resetCodeFlag:boolean = true;
      resetNewPasswordFlag:boolean = false;


  submitResetCodeForm(){


        if(this.resetCodeForm.valid){
        this.isLoading.set(true);
        this.authService.verifyResetCode(this.resetCodeForm.value).subscribe({
          next: res=>{
            this.isLoading.set(false);
            this.resetCodeFlag = false;
            this.resetNewPasswordFlag = true;

          },
          error:err=>{
            this.isLoading.set(false);
            this.errorMsg.set(err.error.message);

          }
        });
      }
      console.log(this.resetCodeForm.value );

  }
}
