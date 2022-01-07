import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private http: HttpClient) {}

  createPostsAndStore(postData:Post){

        this.http
        .post(
          'https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json',
          postData
        )
        .subscribe(responseData => {
          console.log(responseData);
        });

  }


  fetchPosts(){
    let searchParams=new HttpParams();
    searchParams=searchParams.append("print","pretty")
    searchParams=searchParams.append("param1","heyyy")
        return this.http
        .get<{[key:string]:Post}>(
          "https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json",
          {
            headers:new HttpHeaders({
              "my-header":"hello header"
            }),
            params:searchParams,
            responseType:'json'
          }
        )
        .pipe(map((resposeData)=>{
          let responseArray: Post[]=[]
          for(let key in resposeData){
            responseArray.push({...resposeData[key],id:key})
          }
          return responseArray;
        }))


  }

  deleteAllPosts(){
    return this.http.delete("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json",{
      observe:'response'
    })
    .pipe(tap(event=>{
      console.log(event);
      if(event.type==HttpEventType.Response){
        console.log("this is response event");

      }

    }))
  }


}
