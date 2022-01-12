import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, tap, Subject } from 'rxjs';
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

  user =new Subject<User>();

constructor(private http:HttpClient) { }

  signUp(email:string,password:string){

    return this.http.post<AuthResponseData | any>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6sA9Vz6iBOuewqNBwk0zrJxTXtjW60iU",
        {
          email:email,
          password:password,
          returnSecureToken:true
        }
        )
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


  private handleAuthentication(email:string,localId:string,idToken:string,expiresIn:number){

    const expiresDateIn=new Date(new Date().getTime()+ expiresIn*1000)
    const user=new User(email,localId,idToken,expiresDateIn);
    console.log(user);
    this.user.next(user)


  }


}
