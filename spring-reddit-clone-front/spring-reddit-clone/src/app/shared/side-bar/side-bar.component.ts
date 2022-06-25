import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth/shared/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  goToCreateBlogPost() {
    this.router.navigateByUrl('/create-blog-post');
  }

  goToCreatePost() {
    this.router.navigateByUrl('/create-post');
  }

  goToCreateSubreddit() {
    this.router.navigateByUrl('/create-subreddit');
  }

  goToCreateProduct() {
    this.router.navigateByUrl('/create-product');
  }

  goToCreatePolicy() {
    this.router.navigateByUrl('/create-policy');
  }
}
