import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post[] = [];
  isFetching:boolean=false;
  error=null;

  constructor(private http: HttpClient,private postService:PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {

   this.postService.createPostsAndStore(postData);

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    this.postService.deleteAllPosts().subscribe((data)=>{
      console.log(data);
      this.loadedPosts=[]

    })
  }

  fetchPosts(){
    this.isFetching=true;
    this.postService.fetchPosts().subscribe(data=>{
      this.isFetching=false;
      this.loadedPosts=data
    },error=>{
      this.isFetching=false
      this.error=error.error.error
    })
  }
}
