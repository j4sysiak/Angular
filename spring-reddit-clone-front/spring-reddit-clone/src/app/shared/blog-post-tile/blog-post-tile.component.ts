import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BlogPostPayload} from '../../blog-post/create-blog-post/blog-post-payload';
import {BlogPostService} from '../blog-post.service';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

  blogPosts: Observable<Array<BlogPostPayload>>;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    this.blogPosts = this.blogPostService.getAllBlogPosts();
  }

}
