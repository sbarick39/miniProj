import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public names;
  public Phone;
  public emails;
  public passwords;
  public ZipCode
  registeruserData={
    "Name":"",
    "Phone":"",
   "Zipcode":"",
   "Email":"",
   "Password":"",
  }
  
 
  constructor(public auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  
  }


  registerUser(){
  console.log(this.registeruserData)
  this.names=this.registeruserData.Name;
  this.Phone=this.registeruserData.Phone;
  this.ZipCode=this.registeruserData.Zipcode;
  this.emails=this.registeruserData.Email;
  this.passwords=this.registeruserData.Password

 this.auth.registeruser(this.registeruserData).subscribe((res:any)=>{
    
    localStorage.setItem('token',res.token)
    console.log(res)
    this._router.navigate(['/students']);
    this._router.navigate(['/studentsRecord'])
  },err=>{
    console.log(err)
  })
  
  }
  
 

}
