import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
   user!: {id: number, name: string};

  paramssubscription!:Subscription
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route);
    
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    }

    this.route.params
        .subscribe((params:Params)=>{
            this.user={
              id:params['id'],
              name:params['name']
            }
            
        })
  }

  // ngOnDestroy(){
  //     this.paramssubscription.unsubscribe()
  // }

}
