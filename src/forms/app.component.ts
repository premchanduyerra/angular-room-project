import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild('f') signUpForm!: NgForm;

  questionAnswer=''
  genders=["male","female"];

  user={
    username:"",
    email:'',
    secret:'',
    gender:''
  }

  formSubmitted=false;


  suggestUserName() {
    const suggestedName = 'Superuser';


    this.signUpForm.form.patchValue({
      username:suggestedName
    })

  }

  onSubmit(form:NgForm){
   this.user.email=this.signUpForm.value.email;
   this.user.username=this.signUpForm.value.username;
   this.user.secret=this.signUpForm.value.secret;
   this.user.gender=this.signUpForm.value.gender;
   this.formSubmitted=true

   this.signUpForm.reset()

  
   
  }



}
