import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CheckPlateFormService } from './../../../shared/sevices/checkPlateForm/check-plate-form.service';

export const setHeaderInterceptor: HttpInterceptorFn = (req, next) => {

  const checkPlateFormService:CheckPlateFormService=inject(CheckPlateFormService);

  if(checkPlateFormService.checkIsPlateFormBrowser()){
    req=req.clone({
      headers: req.headers.set("token",localStorage.getItem("userToken")|| "")
    })
  }

  return next(req);
};
