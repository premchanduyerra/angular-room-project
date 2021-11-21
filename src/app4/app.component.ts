import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent {
    activeUsers!: string[] ;
    inactiveUsers !:string[];
  
    constructor(private userService:UserService){}
    ngOnInit(): void {
        this.activeUsers=this.userService.activeUsers;
        this.inactiveUsers=this.userService.inactiveUsers
    }

}
