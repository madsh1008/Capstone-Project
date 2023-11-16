import { Injectable } from '@angular/core';
import {Post} from './post.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) {}

  private posts: Post[] = []
  private postUpDate = new Subject<Post[]>()

  // adds post info to the database
  AddPost(post_title:string, description:string, pictures:File, trade_status:string, free_status:string){
    const post: Post = {
      // post_id: post_id,
      // user_id: user_id,
      post_title: post_title,
      description: description,
      pictures: pictures,
      trade_status: trade_status,
      free_status: free_status
    }
    this.posts.push(post);
    this.postUpDate.next([...this.posts]);
  }
}
