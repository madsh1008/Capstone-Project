import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post-service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  user = "user1"
  avatar = 'https://material.angular.io/assets/img/examples/shiba1.jpg'

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPost();
    this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      console.log(posts); //check log to see if it is recieving the post information
      this.posts = posts;
    })
  }

  // description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  image = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
  // status = 'Pending'
  // item = 'Dog'
}
