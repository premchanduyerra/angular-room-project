import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

        return this.http.get<{[key:string]:Post}>("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json")
        .pipe(map((resposeData)=>{
          let responseArray: Post[]=[]
          for(let key in resposeData){
            responseArray.push({...resposeData[key],id:key})
          }
          return responseArray;
        }))


  }

  deleteAllPosts(){
    return this.http.delete("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json")
  }


}
