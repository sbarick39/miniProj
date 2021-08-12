import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public injector:Injector) { }
  intercept(req,next){
    let authService=this.injector.get(AuthService)
    let tokeniZedReq=req.clone({
      setHeaders:{
        Authorization:`Barer ${authService.getToken()}`
      }
    })
    return next.handle(tokeniZedReq)
  }
}
