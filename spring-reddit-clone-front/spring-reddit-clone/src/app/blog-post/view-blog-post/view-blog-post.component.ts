import { Component, OnInit } from '@angular/core';
import {BlogPostPayload} from '../create-blog-post/blog-post-payload';
import {ActivatedRoute} from '@angular/router';
import {BlogPostService} from '../../shared/blog-post.service';

@Component({
  selector: 'app-view-blog-post',
  templateUrl: './view-blog-post.component.html',
  styleUrls: ['./view-blog-post.component.css']
})
export class ViewBlogPostComponent implements OnInit {

  blogPost: BlogPostPayload;
  permaLink: Number;

  constructor(private router: ActivatedRoute, private blogPostService: BlogPostService) {
    this.blogPost = {
      id: '',
      content: '',
      title: '',
      username: ''
    };
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.blogPostService.getBlogPost(this.permaLink).subscribe((response:BlogPostPayload) => {
      this.blogPost = response;
    },(err: any) => {
      console.log('Failure Response');
    })
  }

}
