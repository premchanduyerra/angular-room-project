import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface IObjectKeys {
  [key: string]: string | number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  fetchPosts(){
    this.http.get("https://angular-backend-fc77b-default-rtdb.firebaseio.com/posts.json")
    .pipe(map(resposeData:(IObjectKeys: any)=>{
      let responseArray=[]

      for(let key in resposeData){
        // responseArray.push({...resposeData[key],id:key})
        let a=resposeData.hasOwnProperty(key)
        if(resposeData.hasOwnProperty(key)){
          responseArray.push({...resposeData[1]})
        }
        console.log(key);



console.log(a);


      }
      console.log(resposeData);


    }))
    .subscribe(data=>{
      console.log(data);

    })
  }
}
