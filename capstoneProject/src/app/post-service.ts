import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs';
import { v4 as uuid4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private posts: Post[] = []
  private postUpDate = new Subject<Post[]>()

  constructor(private http: HttpClient) {}

  getPostUpdateListener() {
    return this.postUpDate.asObservable();
  }

  // adds post info to the database

  addPost(post:Post) {
    const newPost: Post = { ...post, post_id: uuid4() };
    this.http.post<{message: string, post: Post }>('http://localhost:3000/api/posts', newPost)
      .subscribe(response => {
        console.log(response.message);
        this.posts.push(response.post);
        this.postUpDate.next([...this.posts]);
      },
      error => {
        console.error('Error adding post:', error);
      });
  }

  //Fetches info from the database
  getPost(){
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData)=>{
      this.posts = postData.posts;
      this.postUpDate.next([...this.posts])
    });
  }

}
