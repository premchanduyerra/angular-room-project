import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{

  isAuthenticated=false;
  constructor(private dataStorageService:DataStorageService,private authService:AuthService) { }


  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      console.log(user);
      this.isAuthenticated=user?true:false

    })
  }

  onSaveData(){
    this.dataStorageService.storeRecipies();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }
  ngOnDestroy(): void {

  }

}
