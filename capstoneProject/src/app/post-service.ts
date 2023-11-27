import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

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

  // addPost(post_title:string, description:string, pictures:File, trade_status:string, free_status:string){
  //   const post: Post = {
  //     // post_id: post_id,
  //     // user_id: user_id,
  //     post_title: post_title,
  //     description: description,
  //     pictures: pictures,
  //     trade_status: trade_status,
  //     free_status: free_status
  //   }
  //   this.posts.push(post);
  //   this.postUpDate.next([...this.posts]);
  // }

  addPost(post:Post) {
    this.http.post<{message: String, post: Post }>('/api/posts', post)
      .subscribe(response => {
        console.log(response.message);
        this.posts.push(response.post);
        this.postUpDate.next([...this.posts]);
      },
      error => {
        console.error('Error adding post:', error);
      });
  }

}
