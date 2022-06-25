import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogPostPayload} from '../blog-post/create-blog-post/blog-post-payload';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  addBlogPost(blogPostPayload: BlogPostPayload){
    return this.httpClient.post(this.baseUrl + 'api/blog/blogposts/', blogPostPayload);
  }

  getAllBlogPosts(): Observable<Array<BlogPostPayload>>{
    return this.httpClient.get<Array<BlogPostPayload>>(this.baseUrl+ 'api/blog/blogposts/all');
  }

  getBlogPost(permaLink: Number):Observable<BlogPostPayload>{
    return this.httpClient.get<BlogPostPayload>(this.baseUrl + 'api/blog/blogposts/get/' + permaLink);
  }
}
