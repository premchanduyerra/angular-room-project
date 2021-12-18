import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  interval: Subscription | undefined;
  constructor() { }


  ngOnInit() {

      let myIntervalObservable=Observable.create((observer:Observer<number>)=>{
        let count:number=1
        setInterval(()=>{
          observer.next(count)


          if(count>5){
            observer.complete()
          }
          count++;
        },1000)
      })

      let newInterval=new Observable((observer:Observer<number>)=>{
        let count:number=1

        setInterval(()=>{
          observer.next(count)
          count++
        },1000)
      })


       this.interval=myIntervalObservable.subscribe((data:number)=>{
        console.log(data);
        
      })




  }


  ngOnDestroy(): void {
    this.interval?.unsubscribe()
  }

}
