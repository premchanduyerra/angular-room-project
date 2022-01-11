import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { iif } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {


  isLoginMode=true;
  isloading=false;
  error:string=null!

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode
  }

  onSubmit(form:NgForm){

    console.log(form.value);
    const email=form.value.email
    const password=form.value.password

    this.isloading=true;
    if(this.isLoginMode){

    }
    else{
      this.authService.signUp(email,password).subscribe(response=>{
        console.log(response);
        this.isloading=false
      },
      err=>{
        console.log("--------");
        this.error=err.error.error.message
        this.isloading=false

        console.log(err.error.error.message);

      })
    }



    form.reset();

  }

}
