import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
// import * as Promise from 'bluebird';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  genders = ['male', 'female'];
  forBiddenNames=["prem","chandu","yerra"];

  signUpForm: FormGroup = new FormGroup({});
  ngOnInit(): void {

    this.signUpForm=new FormGroup({

      'userData':new FormGroup({
        'username':new FormControl(null,[Validators.required,this.onforBiddenNames.bind(this)]),
        'email':new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender':new FormControl('male'),
      'hobbies':new FormArray([])

    });


    this.signUpForm.statusChanges.subscribe((status)=>{
          console.log(status);
    })
   this.signUpForm.valueChanges.subscribe((value)=>{
          console.log(value);
    })

  }


  OnSubmit(){
    console.log(this.signUpForm);

  }

  onAddHobbies(){

    const control=new FormControl("null",Validators.required);

    (<FormArray>this.signUpForm.get('hobbies')).push(control);

  }

  onforBiddenNames(control:FormControl):{[s:string]:true}|null{
    console.log("in for");

      if(this.forBiddenNames.indexOf(control.value)!== -1){
        return {"forbidname":true}
      }
      return null;
  }

  onforBiddenEmails(control:FormControl):Promise<any>|Observable<any>{


    const promise=new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value=="premchanduyerra79@gmail.com"){
          resolve({"forbidenEmail":true})
        }
        else{
          reject(null)
        }
      },2000)

    })

return promise;

  }

}
