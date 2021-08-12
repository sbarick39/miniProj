import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public login:AuthService,public _router:Router) { }

  public loginuserData={
    "Email":"",
    "Password":""
  }

  ngOnInit(): void {
  }
  loginUser(){
   console.log(this.loginuserData)
   this.login.loginuser(this.loginuserData).subscribe((res:any)=>{
     localStorage.setItem('token',res.token)
     console.log(res)
     this._router.navigate(['/students']);
    this._router.navigate(['/studentsRecord'])
   },err=>{
     console.log(err)
   })
  }
}
