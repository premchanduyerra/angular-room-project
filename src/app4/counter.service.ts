import { Injectable } from "@angular/core";

@Injectable()

export class CounterService{
    activeToInactiveCount:number=0;
    inactiveToActiveCount:number=0

    onActiveToInactiveCount(){
        this.activeToInactiveCount+=1;
        console.log("activate to inactivate :"+this.activeToInactiveCount);
        
    }

    onInactiveToActiveCount(){
        this.inactiveToActiveCount++;
        console.log("inactivate to activate :"+this.inactiveToActiveCount);

    }
}