import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('timer') timer!: ElementRef;
 oddNumbers:number[]=[];
 evenNumbers:number[]=[];


  ongameStarted(data:number){
    this.timer.nativeElement.innerText=data
    if(data%2==0){
      this.evenNumbers.push(data)
    }
    else{
      this.oddNumbers.push(data)
    }

  }

  onResetGame(data:any){
    this.timer.nativeElement.innerText=data-1
    this.evenNumbers=[];
    this.oddNumbers=[]
  }















  
  serverElements:any[] = [{type:"server",name:"prem",content:"prem content"}];


  onBlueprintCreated(data:{serverName:string,serverContent:string}) {

    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }


  onServerCreated(data:{serverName:string,serverContent:string}) {
 
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }
}
