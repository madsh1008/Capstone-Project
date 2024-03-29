import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { PostService } from '../post-service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  postFormValue: Post = {
    post_id: '',
    post_title: '',
    description: '',
    pictures: '',
    trade_status: 'available',
    free_status: ''
  };

  constructor(public service: PostService, public fb: FormBuilder){

  }

  postForm: any;

  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }

    const newPost: Post = {
      post_id: '',
      post_title: form.value.post_title,
      description: form.value.description,
      pictures: form.value.pictures,
      trade_status: form.value.trade_status,
      free_status: form.value.free_status
    };

    console.log('Sending POST request with data:', newPost);

    this.service.addPost(newPost);


    // this.service.addPost(
    //   form.value.post_title,
    //   form.value.description,
    //   form.value.pictures,
    //   form.value.trade_status,
    //   form.value.free_status
    // )
    form.resetForm()
  }

}
