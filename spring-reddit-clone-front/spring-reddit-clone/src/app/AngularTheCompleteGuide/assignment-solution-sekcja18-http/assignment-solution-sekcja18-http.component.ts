import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post.model';
import {PostsService} from './posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-assignment-solution-sekcja18-http',
  templateUrl: './assignment-solution-sekcja18-http.component.html',
  styleUrls: ['./assignment-solution-sekcja18-http.component.css']
})
export class AssignmentSolutionSekcja18HttpComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
       this.error = errorMessage;
      });

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
              // console.log(posts);
              this.isFetching = false;
              this.loadedPosts = posts;
            },
        error => {
              this.isFetching = false;
              this.error = error.message;
              // console.log(error);
              }
     );
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        // console.log(posts);
        this.isFetching = false;
        this.loadedPosts = posts;
      },
        error => {
          this.isFetching = false;
          this.error = error.message;
          console.log(error);
      });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onHandleError() {
    this.error = null;
  }
}
