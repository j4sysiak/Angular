import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { SubredditModel } from '../subreddit-response';
import { SubredditService } from '../subreddit.service';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  subredditId: number;
  // tslint:disable-next-line:new-parens
  subreddit: SubredditModel = new SubredditModel;

  constructor(private subredditService: SubredditService,
              private activateRoute: ActivatedRoute) {
      this.subredditId = this.activateRoute.snapshot.params.id;
    }

  ngOnInit(): void {
    this.getSubredditById();
  }

  getSubredditById() {
      this.subredditService.getSubreddit(this.subredditId).subscribe(data => {
      this.subreddit = data;
    }, error => {
      throwError(error);
    });
  }

}
