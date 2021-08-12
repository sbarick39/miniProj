import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url='http://localhost:3000/api/register'
  public loginUrl="http://localhost:3000/api/login"
  constructor(public http:HttpClient,public _router:Router) { }
  registeruser(user){
    return this.http.post<any>(this.url,user)
  }
  loginuser(user){
    return this.http.post<any>(this.loginUrl,user)
  }
  logedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem("token")
    this._router.navigate(['/students'])
  }
}
