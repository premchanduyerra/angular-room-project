import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {

@ViewChild('f') formSubmitted:NgForm | undefined;

subScriptions=["Basic","Advanced","Pro"]
defaultSubScription=this.subScriptions[1];

  constructor() { }

  ngOnInit() {
  }


  onSubmit(){
   console.log(this.formSubmitted?.value);
   
  }

}
