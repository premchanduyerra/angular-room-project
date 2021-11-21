import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css']
})
export class GameControllerComponent implements OnInit {
  isStarted:boolean=false;
  i:number=1;
  ref: any;
@Output()  gameStarted=new EventEmitter<number>();
@Output()  resetGameEvent=new EventEmitter<number>();
 
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.isStarted=true;
    this.ref=setInterval(()=>{
        this.gameStarted.emit(this.i++)
      },1000)
  }

  stopGame(){
    this.isStarted=false;

    clearInterval(this.ref)
  }

  resetGame(){
    this.i=1
    this.resetGameEvent.emit(1)
  }

}
