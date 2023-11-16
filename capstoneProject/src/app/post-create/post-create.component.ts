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

  constructor(public service: PostService, public fb: FormBuilder){

  }

  onAddPost(form: NgForm){
    if (form.invalid) {
      return;
    }

    this.service.AddPost(
      form.value.post_title,
      form.value.description,
      form.value.pictures,
      form.value.trade_status,
      form.value.free_status
    )
    form.resetForm()
  }

}
