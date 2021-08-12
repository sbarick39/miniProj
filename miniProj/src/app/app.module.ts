import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../app/services/auth.service';
import { EventService } from './services/event.service';
import { TokenInterceptorService } from '../app/services/token-interceptor.service';
import { StudentsComponent } from './students/students.component';
import { StdRecordComponent } from './std-record/std-record.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StudentsComponent,
    StdRecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    HttpClientModule,
    //NgHttpLoaderModule.forRoot()
    
   
  ],
  providers: [AuthService,AuthGuard,EventService,TokenInterceptorService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
