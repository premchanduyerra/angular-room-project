import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthResponseData, AuthService } from './auth.service';
import { iif, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isLoginMode=true;
  isloading=false;
  error:string=null!

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode
  }

  onSubmit(form:NgForm){

    console.log(form.value);
    const email=form.value.email
    const password=form.value.password
    let authObs:Observable<AuthResponseData>;
    this.isloading=true;
    if(this.isLoginMode){
        authObs=this.authService.login(email,password);
    }
    else{
      authObs=this.authService.signUp(email,password)
    }

    authObs.subscribe(response=>{
      console.log(response);
      this.isloading=false
      this.router.navigate(['/recipes'])
    },
    err=>{
      console.log("--------");
      this.error=err.error.error.message
      this.isloading=false

      console.log(err.error.error.message);

    })

    form.reset();

  }


  onHandleError(){
    this.error=null!
  }
}
