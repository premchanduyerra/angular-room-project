import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

interface AuthResponseData{

  idToken:	string	,
  email:	string	,
  refreshToken:	string	,
  expiresIn:	string	,
  localId:	string


}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

}
