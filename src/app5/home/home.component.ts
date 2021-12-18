import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private activeRoute:ActivatedRoute,
    private authService:AuthService
    ){ }

  ngOnInit() {
  }

  onLoadServer(){
      this.router.navigate(['server'],{relativeTo:this.activeRoute})
  }

  onLogin(){

    this.authService.login()
  }

  onLogout(){
    this.authService.logout()
  }

}
