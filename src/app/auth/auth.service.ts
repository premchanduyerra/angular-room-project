import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError, tap, Subject, BehaviorSubject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData{

  idToken:	string,
  email:	string,
  refreshToken:	string,
  expiresIn:	string,
  localId:	string,
  registered?:string


}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user =new BehaviorSubject<User|any>(null);
   logoutTimeInterval:any;
constructor(private http:HttpClient,private router:Router) { }

  signUp(email:string,password:string){

    return this.http.post<AuthResponseData | any>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6sA9Vz6iBOuewqNBwk0zrJxTXtjW60iU",
        {
          email:email,
          password:password,
          returnSecureToken:true
        }
        ).pipe(tap(resData=>{
          this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
          }))
  }

  login(email:string,password:string){

    return this.http.
    post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6sA9Vz6iBOuewqNBwk0zrJxTXtjW60iU",
        {
          email:email,
          password:password,
          returnSecureToken:true
        }
    ).pipe(tap(resData=>{
      this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn)
      }))

  }

  autoLogin(){
    const userData:{email:string;id:string;_token:string;_tokenExpirationDate:string}=JSON.parse(localStorage.getItem('userData')!);

    if(!userData){
      return;
    }

    const user=new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))

    if(user.token){
      this.user.next(user)
      let expiresDuration=new Date(userData._tokenExpirationDate).getTime()-new Date().getTime()

      this.autoLogout(expiresDuration)

    }


  }



  logout(){
    this.user.next(null);
    localStorage.removeItem('userData')
    this.router.navigate(['/auth'])
    if(this.logoutTimeInterval){
      clearTimeout(this.logoutTimeInterval)

    }
  }

  autoLogout(expiresDuration:number){
    console.log(expiresDuration);

    this.logoutTimeInterval=setTimeout(()=>{
      this.logout();
    },expiresDuration)

  }


  private handleAuthentication(email:string,localId:string,idToken:string,expiresIn:number){

    const expiresDateIn=new Date(new Date().getTime()+ expiresIn*1000)
    const user=new User(email,localId,idToken,expiresDateIn);
    // console.log(user);
    this.user.next(user)
    localStorage.setItem('userData',JSON.stringify(user))
    this.autoLogout(expiresIn*1000)


  }


}
