import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

  projectForm!:FormGroup ;

  projectStatus=['Stable', 'Critical', 'Finished'];

  constructor() { }

  ngOnInit() {

    this.projectForm=new FormGroup({
      'project_name':new FormControl(null,[Validators.required,this.forbiddenProjectNames.bind(this)]),
      'mail':new FormControl(null,[Validators.required,Validators.email]),
      'project_status':new FormControl(this.projectStatus[1])
    })

    // this.projectForm.valueChanges.subscribe((value)=>{
    //   console.log(value);

    // })



  }

  onSubmit(){
console.log('====================================');
console.log(this.projectForm);
console.log('====================================');
  }


  forbiddenProjectNames(control:FormControl):{[s:string]:boolean}|null{

    console.log(1);

    if(control.value=="Test"){
      return {'forbiddenProjectName':true}
    }else{
      return null;
    }


  }


}
