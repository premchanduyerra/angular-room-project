import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export class AuthInterceptorService implements  HttpInterceptor {

constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("request sent");
    console.log(req.url);
    let modifiedRequest=req.clone({
      headers:req.headers.append("xyz","abc")
    })


    return next.handle(modifiedRequest)
    .pipe(tap(event=>{
      console.log("event");
      console.log(event);

    }))
  }

}
