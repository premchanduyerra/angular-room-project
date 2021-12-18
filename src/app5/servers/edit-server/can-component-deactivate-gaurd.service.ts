import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export interface CanComponentExit{
    CanComponentExit:()=> boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
}


export class CanDeactivateGaurd implements CanDeactivate<CanComponentExit>{
    canDeactivate(component: CanComponentExit, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      console.log(component);
      
      
        return component.CanComponentExit();
    }

}