import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogPostPayload} from './blog-post-payload';
import {Router} from '@angular/router';
import {BlogPostService} from '../../shared/blog-post.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css']
})
export class CreateBlogPostComponent implements OnInit {

  addBlogPostForm: FormGroup;
  title = new FormControl('');
  body = new FormControl('');
  blogPostPayload: BlogPostPayload;

  constructor(private blogPostService: BlogPostService,
              private router: Router) {
    this.addBlogPostForm = new FormGroup({
      title: this.title,
      body: this.body
    });
    this.blogPostPayload = {
      id: '',
      content: '',
      title: '',
      username: ''
    }
  }

  ngOnInit(): void {
  }

  addBlogPost() {
    this.blogPostPayload.content = this.addBlogPostForm.get('body').value;
    this.blogPostPayload.title = this.addBlogPostForm.get('title').value;

    this.blogPostService.addBlogPost(this.blogPostPayload).subscribe(response => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('Failure Response');
    })
  }
}
