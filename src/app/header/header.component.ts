import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() HeaderClicked=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  recipiesClicked(){
    this.HeaderClicked.emit("recipes");
    
  }

  shoppingClicked(){
    this.HeaderClicked.emit("shopping");

    
  }
}
